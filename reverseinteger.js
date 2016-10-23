//wrong
	var readlinesync=require('readline-sync');

	var n=readlinesync.question("please enter the number");

   var result=revint(n);
   console.log(result);
    

function revint(n){
	 
	var d;
	var r=0;
	if(n==0)
	{
	return n;
   }
	else
	{
	d=n%10;
	r=r*10+d;
	n=n/10;
	}
return r;

}
 

