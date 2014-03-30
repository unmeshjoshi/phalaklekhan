var db = require(process.cwd() + '/app/home/db.js')

var presenter = module.exports;

presenter.uri = '/category/:category';

function getExpirationTime() {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 3600);
    return date;
}
presenter.cache_headers = {
    'Cache-Control': 'public, max-age=3600',
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

function splitArray(a) {
    var i, res = new Array(), parts = new Array();
    var j = 0;
    for (i = 0; i < a.length; i++) {
        if (j == 4) {
            res.push(parts);
            parts = [];
            j = 0;
        } else {
            parts.push(a[i]);
            j++;
        }
    }
    res.push(parts);
    return res;
}