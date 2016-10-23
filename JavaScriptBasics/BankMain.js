var BankClass=require("./Bank").Bank;
var Bankobj=new BankClass(11111,300000,"MONA",0000);
Bankobj.deposite(50000,fun1);
Bankobj.withdraw(20000,fun2);
function fun1(result1){
	console.log("result is"+result1);
}
function fun2(result2){
	console.log("result is"+result2);
}
