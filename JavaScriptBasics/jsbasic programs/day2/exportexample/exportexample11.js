

/**
 * Constructor
 * @param {Object} params
 */
var exportexample = function(params) {
	console.log(JSON.stringify(params)+"checking params");
	//console.log(username+"checking username"+username)
	

		if(params.username !=='undefined'){
			this.username=params.username;
		}

		if(params.password !=='undefined'){
			this.password=params.password;
		}
		
}

exportexample.prototype.logindetails = function(callback) {
	
	
	console.log("username from login details::  "+this.username+" ::  "+ this.password);

	callback("details reachec successfully");

};


exports.exportexample = exportexample;

