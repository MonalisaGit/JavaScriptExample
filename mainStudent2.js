var student2Class=require("./student2").student2
var studentObj=new student2Class("mona",1221292003);

studentObj.insertRecord("lisa",123,fun1);
studentObj.displayInformation(fun2);

function fun1(result1){

	console.log(result1);
}
function fun2(result2){

	console.log(result2);
}
