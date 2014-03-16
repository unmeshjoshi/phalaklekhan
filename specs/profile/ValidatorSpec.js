var assert = require("assert");
var should = require("should");
var req = require(process.cwd() + '/lib/require-from-app-root').req;
var Validator = req('app/profile/Validator');

describe('ValidatorTest', function () {

    it("should not accept special characters", function (done) {
        var profile = {
            password:"password",
            title:"Title",
            telephoneNumber:"+91-9881303993@#$",
            otherMobile:["988130039"],
            messengers:{Gtalk: "", Yahoo: "", Skype: "", Other: ""},
            mailAddress:"test@testdomain.com",
            streetAddress:"1 cranberry hill",
            l:"lexington",
            co:"United States",
            st:"MA",
            physicalDeliveryOfficeName:"Pune"
        }
        var errors = Validator.validate(profile)
        assert.equal(errors.workPhoneError, "Invalid Phone Number(only digits, + and - allowed)")
        done();
    })

    it("title should not be more than 30 characters", function (done) {
        var profile = {
            password:"password",
            title:"TitleMoreThan30Charactersssssssssssssssssssssssssssssssssssssssssssssss",
            telephoneNumber:"+91-9881303993",
            otherMobile:["988130039"],
            messengers:{Gtalk: "", Yahoo: "", Skype: "", Other: ""},
            mailAddress:"test@testdomain.com",
            streetAddress:"1 cranberry hill",
            l:"lexington",
            co:"United States",
            st:"MA",
            physicalDeliveryOfficeName:"Pune"
        }
        var errors = Validator.validate(profile)
        assert.equal(errors.titleError, "Length can not exceed 30 characters")
        done();
    })

});