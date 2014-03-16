var assert = require("assert");
var env = require(process.cwd()+'/app/env.json');
var LdapWrapper = require(process.cwd()+ '/app/util/ldapWrapper');

var search_options = {
    base: env.ldap.base_dn,
    scope: env.ldap.scope,
    filter: "(sAMAccountName=mytw)",
    attrs: env.ldap.search_attrs
};

describe('ldapWraperTest', function () {

    it("should connect to Ldap", function(done) {
        LdapWrapper().searchLdap(search_options, function(err,content){
            assert.equal(err,null);
            done();
        });
    });

    it("should set attributes for search", function(done) {
        LdapWrapper().searchLdap(search_options,function(err,content){
            assert.equal(content[0].sn[0],'Generic ID');
            done();
        });
    });
});

