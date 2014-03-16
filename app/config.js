var env = require('./env.json');

var config = function() {
    var node_env = process.env.NODE_ENV || 'development';
    return env[node_env];
}
exports.config = config();