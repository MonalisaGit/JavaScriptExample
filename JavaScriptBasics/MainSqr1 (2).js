var sqrClass = require("./squre1").squre1
var sqrObj = new sqrClass();

var side = 5;

 sqrObj.area(side,fun);
 sqrObj.circumtance(side);

function fun (result) {
	//console.log("Call back called");

	console.log("result is"+result);
}