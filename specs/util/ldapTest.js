//var excelCreator = require('./excelCreator');

function ldap_bind(ldap, bind_options) {
    ldap.simplebind(bind_options, function (err) {
        if (err) {
            console.log(err);
            return console.log("cannot connect");
        } else {
            return console.log("connected");
        }
    })
}
(function() {
    var LDAP, bind_options, ldap, search_options;

    LDAP = require("LDAP");

    ldap = new LDAP({
        uri: "ldap://sifydc01.corporate.thoughtworks.com:389",
        connecttimeout: 1000
    });

    ldap.open(function(err) {
        if (err) {
            console.log(err);
            return console.log("cannot connect");
        } else {
            return console.log("connected");
        }
    });

    bind_options = {
        binddn: "jiveadmin@corporate.thoughtworks.com",
        password: "J1v3@dmin"
    };

    ldap_bind(ldap, bind_options)

    var search_query = "uvjoshi@thoughtworks.com";

    search_options = {
        base: "OU=Employees,OU=Enterprise,OU=Principal,DC=corporate,DC=thoughtworks,DC=com",
        scope: "0",
        filter: "mail=" + search_query,
        attrs: "*"
    };

    ldap.search(search_options, function(err, data) {
        console.log("in search");
        console.log(data);
//        var bind_options = {
//            binddn: search_query,
//            password: "password"
//        }
//        ldap_bind(ldap, bind_options);
//        ldap.modify('CN=Unmesh V Joshi,OU=Pune,OU=Employees,OU=Enterprise,OU=Principal,DC=corporate,DC=thoughtworks,DC=com', [{
//            op:'replace',
//            attr: 'otherMobile',
//            vals:['91-9881304988']
//        }], function(err) {
//            console.log(err);
//        })

    });






}).call(this);