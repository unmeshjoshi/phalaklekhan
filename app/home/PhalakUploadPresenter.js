var presenter = module.exports;

presenter.uri = '/phalak-upload';

presenter.show = function (req, res) {
    res.render('phalakupload', {})
}