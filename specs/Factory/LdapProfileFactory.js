var LdapProfileFactory = function(){

    var testLdapContent =  [{
        title: [ 'Developer' ],
        physicalDeliveryOfficeName: [ 'Pune' ],
        telephoneNumber: [ '1234567890 ' ],
        displayName: [ 'TW User' ],
        info: [ '{"Gtalk":"twuser@gmail.com","Yahoo":"tw.user"}' ],
        co: [ 'India' ],
        department: [ 'TechOps' ],
        sAMAccountName: [ 'mytw' ],
        otherMobile: [ '+3456345634', '+1234234534 (Emergency call)', '+444-67-89',"+123 890 789" ],
        otherMailbox:
            [ 'my.tw@thoughtworks.com','twuser@thoughtworks.com','tw.user@thoughtworks.com','user.tw@thoughtworks.com','00000@thoughtworks.com'],
        mailAddress: [ 'my.tw@yahoo.com' ],
        mail: [ 'mytw@thoughtworks.com' ],
        msSFU30UidNumber: [ '00000' ],
        dn: 'CN=Don\'t Mail Generic ID,OU=GmailExceptions,OU=Employees,OU=Enterprise,OU=Principal,DC=corporate,DC=thoughtworks,DC=com' }];


    var getTestProfile = function(){
        return testLdapContent[0];
    };


    return{
        getTestProfile:getTestProfile
    }

};
module.exports = LdapProfileFactory;

