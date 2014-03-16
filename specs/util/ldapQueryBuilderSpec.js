var assert = require("assert");
var LdapQueryBuilder = require(process.cwd()+ '/app/util/ldapQueryBuilder');

describe('ldapQueryBuilderTest', function () {

    it("should return Ldap Query for a User Lookup", function(done) {
        var queryForUserLookup = LdapQueryBuilder().getLdapQueryFor("getUser","mytw");
        assert.equal(queryForUserLookup.filter,'(sAMAccountName=mytw)');
        done();
    });

    it("should return Ldap Query for Search", function(done) {
        var queryForSearch = LdapQueryBuilder().getLdapQueryFor("searchUsers","mytw");
        assert.equal(queryForSearch.filter,'(|(sAMAccountName=mytw*)(otherMobile=*mytw*)(telephoneNumber=*mytw*)(mail=mytw*)(otherMailbox=mytw*)(givenName=mytw*)(sn=mytw*)(displayName=mytw*))');
        done();
    });
});

