	var readlinesync=require('readline-sync');

	var size=readlinesync.question("please enter the array size");
	var myarray=[];
	for(var i=0;i<size;i++){
		myarray[i]=readlinesync.question("please enter the array elements");
	}
	console.log("Array elements u entred is::"+myarray);


	 function sumarray(array){
    var total = 0;
    for(var i=0; i<size; i++)
    	{
        total=total+parseInt(myarray[i]);
      }
     return total;
}
var result=sumarray(myarray);
console.log("result is"+result);