var assert = require("assert");
var should = require("should");
var req = require(process.cwd() + '/lib/require-from-app-root').req;
var env = req('app/env.json');
var SearchController = req('app/controllers/searchController');
var error = req('app/errorMessages.json');

describe('searchControllerTest', function () {

    it("should give error of search query pattern does not match with expected", function(done) {
        SearchController().search('action','%^%^%^',function(err,content){
            assert.equal(err,error.invalid_character)
            done();
        })
    });

    it("should give no results error if ldap does not return any results", function(done) {
        SearchController().search('searchUsers','apple orange',function(err,content){
            assert.equal(err,error.no_results)
            done();
        })
    });

    it("should return nonempty resultset for valid response from ldap", function(done) {
        SearchController().search('searchUsers','david',function(err,content){
            assert.equal(err,null);
            content.length.should.be.greaterThan(0);
            done();
        })
    });
});

