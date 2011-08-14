YUI().use('test', 'console', function (Y) {

	var romanNumbersTestCase = {
		
		name: "Roman numbers tests"
	
	};
	
	[
		
		["i", 1],
		["ii", 2],
		["iii", 3],
		["iv", 4],
		["v", 5],
		["vii", 7],
		["ix", 9],
		["x", 10],
		["xii", 12],
		["xxvi", 26],
		["xxxix", 39],
		["xlix", 49],
		["xc", 90],
		["c", 100],
		["cd", 400],
		["d", 500],
		["cm", 900],
		["m", 1000],
		["mcmxcix", 1999],
		["mmxi", 2011],
		
	].forEach(function(tc){
	
		var expected = tc[0], input = tc[1];
	
		romanNumbersTestCase["test that RomanNumbers.getRoman("+input+") returns '"+expected+"'"]=function()
		{
			Y.Assert.areEqual(expected, RomanNumbers.getRoman(input));
		};
	
	});
	
	
	// boilerplate:
	var c = new Y.Console({style: 'block', width: '100%', height: '700px'});
	c.render('#testReport');
	
	
	Y.Test.Runner.add(new Y.Test.Case(romanNumbersTestCase));
	Y.Test.Runner.run();

});
