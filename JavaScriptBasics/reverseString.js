
var readlineSync=require('readline_sync');

str=readlineSync.question("enter the string");

 function reverse(str) {
  var i = [];
  for (var i = 0, len = str.length; i <= len; i++)
    i.push(str.charAt(len - i));
  return i.join('');
}



function StrReverse(str) {

	for(var i = str.length; i > 0 ; i--)
	{
		
	}
}