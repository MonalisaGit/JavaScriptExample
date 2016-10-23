



myfirstfunction();



function myfirstfunction(){
	var myname="krishna";
	var myplace="bangalor"
	mysecondfunction(myname,myplace)

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


(function selfinvoking(){
	console.log("from self invoking");
})();