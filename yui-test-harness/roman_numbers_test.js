YUI().use('test', 'console', function (Y) {

	var romanNumbersTestCase = {
		
		name: "Roman numbers tests"
		
		/* tests here */		
	
	};
	
	
	var c = new Y.Console({style: 'block', width: '100%', height: '700px'});
	c.render('#testReport');
	
	
	Y.Test.Runner.add(new Y.Test.Case(romanNumbersTestCase));
	Y.Test.Runner.run();

});
