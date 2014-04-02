var db = require(process.cwd() + '/app/home/db.js')

var presenter = module.exports;

presenter.uri = '/phalak/:name';

function getExpirationTime() {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 7200);
    return date;
}
presenter.cache_headers = {
    'Cache-Control':'public, max-age=7200',
    'Expires':getExpirationTime()
};

presenter.show = function (req, res) {
    var name = req.param('name') + ".JPG";
    db.find({ name: name }, function (err, docs) {
        if (docs.length == 0) {
            res.status(404);
            res.type('txt').send('Not found');
            return;
        }
        res.render('phalak', {doc:docs[0]})
    });
}