

var name="krishna";
var place="banglore";

secondfunction(name,place,callbackdata);



function secondfunction(name,place,mycallback){

	var object={};
	object.name=name;
	object.place=place;
	 console.log("checking callbackdata is::");

	mycallback(object);

}


function callbackdata(data){

	console.log("checking callbackdata::"+JSON.stringify(data))

}