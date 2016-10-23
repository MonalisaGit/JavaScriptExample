
	var readlinesync=require('readline-sync');

	var num=readlinesync.question("please enter the number");

   var result=revint(num);
   console.log(result);
    

function revint(num){
 var  reverse = 0;
        while(num != 0){
            reverse = (reverse*10)+(num%10);
            num = parseInt(num/10);
        }
        return reverse;


}
 

