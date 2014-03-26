var db = require(process.cwd() + '/app/home/db.js')

var presenter = module.exports;

presenter.uri = '/category/:category';

function getExpirationTime() {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 600);
    return date;
}
presenter.cache_headers = {
    'Cache-Control': 'public, max-age=600',
    'Expires': getExpirationTime()
};

presenter.show = function (req, res) {
    var category = req.param('category');
    console.log("category is " + category)
    db.find({ category: category }, function (err, docs) {
        var arrays = splitArray(docs);
        res.render('category', {category: arrays })
    });
}
