
var str='UsernameToken  Username="My Name", Password="Qd0QnQn0eaAHpOiuk"'

var store=wsseheadervalues(str);
console.log("usename and password is ::"+store);

function wsseheadervalues(str){


console.log(str+"checking header in wsse headervalues");
var strarray = str.split(",");
var firstindex;
var lastindex;

for(var i=0;i<strarray.length;i++){
		var checkvalue=strarray[i];
		if(checkvalue.search("Username")!=-1){
			
			var Username =getvalues(checkvalue);	
			
			console.log("username::"+Username);

		}else if(checkvalue.search("Password")!=-1){

			var psw =getvalues(checkvalue);
			console.log("password::"+psw);

		}

}
return Username+"....."+psw

}

function getvalues(checkvalue){

			 firstindex=checkvalue.indexOf('"');
			 lastindex=checkvalue.lastIndexOf('"');
			var keyvalue= checkvalue.substring(firstindex+1, lastindex); 
			console.log(firstindex+"checking indexxxxxx"+lastindex+"username::"+keyvalue)
			return keyvalue

}