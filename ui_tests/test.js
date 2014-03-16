var bt = require(process.cwd()+ '/pages/BaseTest');




describe('bt', function(){
	@beforeEach
	function beforeMethod(){
		console.log("Before Method");
	}
  describe('#methodName()', function(){
    it('should print without error', function(){
      var t = new bt("zinta!");
      t.methodName();
    })
  })
})







