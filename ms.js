var sqrClass = require("./squre12").squre1
var sqrObj = new sqrClass();

var side = 5;


 sqrObj.circumtance(side);
 sqrObj.area(side,fun);
 //sqrObj.circumtance(side);

function fun (result) {
	//console.log("Call back called");

	console.log("result is"+result);
}