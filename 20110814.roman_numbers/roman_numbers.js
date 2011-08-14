RomanNumbers=
{
	getRoman: function(arabic)
	{
		var romans = {};
		
		var genRomans = function(base,i,v,x)
		{
			romans[base*10]=x;
			romans[base*9]=i+x;
			romans[base*5]=v;
			romans[base*4]=i+v;
			romans[base]=i;
		};
		
		genRomans(  1, "i", "v", "x");
		genRomans( 10, "x", "l", "c");
		genRomans(100, "c", "d", "m");
		
		var descending = function(a,b)
		{
			return parseInt(b)-parseInt(a);
		};
		
		
		var appendRomans = function(result, num)
		{
			while (arabic >= num)
			{
				result += romans[num];
				arabic -= num;
			};
			return result;
		};
		
		
		
		return Object.keys(romans).sort(descending).reduce(appendRomans, '');
	}
}
