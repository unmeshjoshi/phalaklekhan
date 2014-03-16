require('remedial')

var winston = require('winston')
    , cluster = require('cluster')

var logFileName = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();

winston.add(winston.transports.File, { filename: './logs/'+logFileName+'.log'.supplant({env_name: process.env.NODE_ENV}), json: false })

if (process.env.NODE_ENV === 'test') {
    winston.remove(winston.transports.Console)
}

var log = function(level, title, message) {
    message = (message instanceof Array || typeof(message) === 'string') ? message : JSON.stringify(message)
    if (title) {
        message = '{title}: {message}'.supplant({ title: title, message: message })
    }

    if (cluster.isMaster) {
        message = 'master@{pid}: ' + message
    } else {
        message = 'worker@{pid}#{id}: '.supplant({ id: cluster.worker.id }) + message
    }

    winston.log(level, message.supplant({ pid: process.pid }))
}

module.exports = function() {
    return {
        info: function(title, message) {
            log('info', title, message)
        },
        debug: function(title, message) {
            log('debug', title, message)
        },
        error: function(title, message) {
            log('error', title, message)
        }
    }
}
