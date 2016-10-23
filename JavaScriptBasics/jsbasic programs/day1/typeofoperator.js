 var x = 123;
 var y = new Number(123);

// typeof x returns number
// typeof y returns object 
console.log("typeof x::"+ typeof x);
console.log("typeof Y::"+ typeof y);




if(x==y){
	//checking the value using"==" operator
	console.log("x and y are equal");
}else{
	console.log("x and y are not equal");
}


if(x===y){
	//checking the value and typeof object using"===" operator
	console.log("x and y are equal");
}else{
	console.log("x and y are not equal");
}