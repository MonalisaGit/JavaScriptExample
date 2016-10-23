    


var result= phonenumber(inputtxt);


var readlinesync=require('readline-sync');

  var inputtxt=readlinesync.question("please enter the Phone Number");
 



    function phonenumber(inputtxt)  
    {  
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
      if(inputtxt.value.match(phoneno))  
         {  
           return true;  
         }  
       else  
         {  
           alert("Not a valid Phone Number");  
           return false;  
         }  
    }  
    