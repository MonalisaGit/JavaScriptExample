"use strict"



myfirstfunction();



function myfirstfunction(){
	 myname="krishna";
	 myplace="bangalor"
	mysecondfunction(myname,myplace)
	var name;

}

function mysecondfunction(name,place){

	console.log("mysecondfunction "+"name::"+name+"       "+"place::"+place)

	var returnvalue=mythirdfunction(name);

	console.log("mysecondfunction ::checking return value::"+returnvalue)

}

function mythirdfunction(name,place){

		if(name==undefined){
			console.log("mythirdfunction name is not defined::"+name);
		}

		if(place== undefined){
			console.log("mythirdfunction place is undefined");
		}

	console.log("mythirdfunction "+"name::"+name+"       "+"place::"+place)
	return name+"::"+place
}


(
	function mylastfunction()
	{
	console.log("from self invoking");
	}
) ();


