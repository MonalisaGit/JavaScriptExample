

var name="krishna";
var place="banglore";

secondfunction(name,place,function(data){

	console.log("checking callbackdata::"+JSON.stringify(data))
});



function secondfunction(name,place,mycallback){

	var object={};
	object.name=name;
	object.place=place;

	mycallback(object);

}


