var CalculationClass=require("./rectangle").rectangle
var recobj=new CalculationClass(5,7);
recobj.insert(10,5);
recobj.calculateArea(result);
function result(result){
	console.log("area is"+result);
}
