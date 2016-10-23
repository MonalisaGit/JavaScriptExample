
var store=myfirstfunction();
console.log("str is store in store variable"+"  "+store);








function myfirstfunction(){
	var username="mona";
	var password="lisa";
	var str=username+password;
			console.log(str);
 console.log("end of the first function");

	var checkvalue=mysecondfunction();
	return checkvalue;



}
function mysecondfunction(uname,psw){
	if (psw==undefined) {
		console.log("username is undifined");
	}
	if(uname==undefined){
			console.log(uname+psw);

	return "end of the second ";
	}

}

