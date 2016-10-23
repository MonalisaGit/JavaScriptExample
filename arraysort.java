var array=[2,3,4,5,3,12,34,56,98,32,55];
for(var i=0;i<array.length;i++)
{
	for(var j=0;j<array.length;j++)
	{
		if(array[i]<array[j])
		{
			var temp=array[i];
			array[i]=array[j]
			array[j]=temp;
		}
	}
}
for(var i=0;i<array.length;i++)
{
	console.log(array[i]);
}