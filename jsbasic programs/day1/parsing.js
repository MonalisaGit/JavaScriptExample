var rollnumber="12345";
var id=12345;



var temproll=parseInt(rollnumber);

console.log("typeof rollnumber::"+typeof rollnumber);
console.log("typeof temproll::"+typeof temproll);

if(rollnumber==id){
	console.log("rollnumber and id are equal");
}else if(temproll==id){
	console.log("temproll and id are not  equal");
}


var str=id.toString();

if(rollnumber==str){
	console.log("str and rollnumber are equal");
}