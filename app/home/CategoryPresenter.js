var db = require(process.cwd() + '/app/home/db.js')

var presenter = module.exports;

presenter.uri = '/category/:category';

function getExpirationTime() {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 60);
    return date;
}
presenter.cache_headers = {
    'Cache-Control': 'public max-age=60',
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

function splitArray(a, seps) {
    var i, res = new Array(), parts = new Array();
    for (i = 0; i < a.length; i++) {
        if (i % 4 == 0) {
            res.push(parts);
            parts = [];
        } else {
            parts.push(a[i]);
        }
    }
    res.push(parts);
    return res;
}