var fs = require('fs');
var path = require('path');
var db = require(process.cwd() + '/app/home/db.js')

var presenter = module.exports;

presenter.uri = '/phalak-upload';

presenter.execute = function (req, redirectCallback) {
    var category = req.param("category")
    var title = req.param("title")
    var image = req.files.displayImage;

    console.log("image is " + image.path);

    var outputFile = path.join(process.cwd(), "/app/public/phalaks/") + image.name;

    FileUtils.copy(image.path, outputFile, function(err, from, to) {
        db.insert({ category: category, title: title, image:image.name}, function (err, newDocs) {
           console.log(err);
        });
        redirectCallback("/")
    });
}

var FileUtils = {
    copy: function (from, to, callback) {
        fs.readFile(from, function (err, data) {
            console.log("Copying file from " + from + "to" + to)
            fs.writeFile(to, data, function(err) {
                console.log(err)
                callback(err, from, to)
            });
        });
    }
}