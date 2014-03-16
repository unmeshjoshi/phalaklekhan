var Datastore = require('nedb')
    , db = new Datastore({ filename: './data/phalakdb.db', autoload: true });

module.exports = db;