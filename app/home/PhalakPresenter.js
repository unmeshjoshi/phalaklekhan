var presenter = module.exports;

presenter.uri = '/phalak/:name';

function getExpirationTime() {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 60);
    return date;
}
presenter.cache_headers = {
    'Cache-Control':'public max-age=60',
    'Expires':getExpirationTime()
};

presenter.show = function (req, res) {
    var name = req.param('name');
    console.log("phalak is " + name)
    res.render('phalak', {name:name})
}