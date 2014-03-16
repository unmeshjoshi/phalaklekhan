var should  = require('should')
var env = require(process.cwd()+'/app/env.json');
var LdapProfileMapper = require(process.cwd()+ '/app/mapper/ldapProfileMapper');
var LdapProfileFactory = require(process.cwd()+ '/specs/factory/ldapProfileFactory');


describe('ldapProfileMapperTest', function () {

   it("should map ldap data to user object", function(done){
        LdapProfileMapper().map(LdapProfileFactory().getTestProfile(),function(userProfile){
            userProfile.username.should.be.equal("mytw");
            userProfile.empId.should.be.equal("00000");
            userProfile.displayname.should.be.equal("TW User");
            userProfile.co.should.be.equal("India");
            done();
        })
    });

    it("should extract IM info and set default data for gtalk, yahoo, skype", function(done){

        LdapProfileMapper().map(LdapProfileFactory().getTestProfile(),function(userProfile){
            userProfile.messengers.Gtalk.should.be.equal("twuser@gmail.com");
            userProfile.messengers.Yahoo.should.be.equal("tw.user");
            done();
        })
    });

    it("should remove domains from the aliases", function(done){

        LdapProfileMapper().map(LdapProfileFactory().getTestProfile(),function(userProfile){
            userProfile.aliases[0].should.be.equal("my.tw");
            userProfile.aliases[2].should.be.equal("tw.user");
            userProfile.aliases.length.should.be.equal(5);
            done();
        })
    });

    it("should remove alphabets and special characters except - from mobile numbers", function(done){

        LdapProfileMapper().map(LdapProfileFactory().getTestProfile(),function(userProfile){
            userProfile.otherMobile[0].should.be.equal('+3456345634');
            userProfile.otherMobile[1].should.be.equal('+1234234534');
            userProfile.otherMobile[2].should.be.equal('+4446789');
            userProfile.otherMobile[3].should.be.equal('+123 890 789');
            done();
        })
    });
});

