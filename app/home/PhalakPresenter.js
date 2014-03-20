var presenter = module.exports;

presenter.uri = '/phalak/:name';

function getExpirationTime() {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 600);
    return date;
}
presenter.cache_headers = {
    'Cache-Control':'public, max-age=600',
    'Expires':getExpirationTime()
};

presenter.show = function (req, res) {
    var name = req.param('name');
    console.log("phalak is " + name)
    res.render('phalak', {name:name})
}