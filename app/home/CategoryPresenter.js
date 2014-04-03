var db = require(process.cwd() + '/app/home/db.js')
var valueLisHandler = require(process.cwd() + '/app/home/ValuelistHandler.js').valueListHandler

var presenter = module.exports;

presenter.uri = '/category/:category';

function getExpirationTime() {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 7200);
    return date;
}
presenter.cache_headers = {
    'Cache-Control': 'public, max-age=7200',
    'Expires': getExpirationTime()
};

presenter.show = function (req, res) {
    var category = req.param('category');
    console.log("category is " + category)
    db.find({ category: category }, function (err, docs) {
        if (docs.length == 0) {
            res.status(404);
            res.type('txt').send('Not found');
            return;
        }
        var arrays = valueLisHandler.split_array(docs, 4);
        res.render('category', {category: arrays })
    });
}
