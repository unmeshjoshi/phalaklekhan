var db = require(process.cwd() + '/app/home/db.js')
var presenter = module.exports;

presenter.uri = '/';

function getExpirationTime() {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 3600);
    return date;
}
presenter.cache_headers = {
    'Cache-Control':'public, max-age=3600',
    'Expires':getExpirationTime()
};

presenter.show = function (req, res) {
    db.find({}, function (err, docs) {
        console.log(err);
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.render('homepage', {docs:docs})
    });
}