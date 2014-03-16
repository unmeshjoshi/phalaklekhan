var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http')
var req = require(process.cwd() + '/lib/require-from-app-root').req;
var settings = req('app/config').config;

app = express();
var cluster = exports.cluster = require('cluster');
var numCPUs = require('os').cpus().length - 2;
var logger = req('lib/logger')();
var expmvp = require('expressmvp');

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died. Trying to respawn...');
        cluster.fork();
    });

} else {

    var options = {
        key: fs.readFileSync('./private/key.pem'),
        cert: fs.readFileSync('./private/cert.pem')
    };
    app.set('port', process.env.PORT || 4000);
    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    var oneYear = 31557600000;
    app.use(express.static(path.join(__dirname, '/app/public')));
    app.use(express.static(path.join(__dirname, '/app/public/phalaks'), { maxAge: oneYear}));


    expmvp.configure(app)
   app.listen(4000)
}
