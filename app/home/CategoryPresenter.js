var db = require(process.cwd() + '/app/home/db.js')

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
        var arrays = splitArray(docs);
        res.render('category', {category: arrays })
    });
}

function splitArray(array) {
    res = new Array();
    var i,j,temparray,chunk = 4;
    for (i=0,j=array.length; i<j; i+=chunk) {
        temparray = array.slice(i,i+chunk);
        res.push(temparray);
    }
    return res;
}