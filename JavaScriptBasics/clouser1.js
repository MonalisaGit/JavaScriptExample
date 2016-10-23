var myfun1 = fun1(5);
var myfun2 = myfun1(10);
myfun2(15);




function fun1 (p) {
var x = p;

	return function fun2 (q) {
		var y = q;

		return function fun3 (r) {
			var z = r;

			console.log (x + "...." + y + "......" + z);
		} 

	} 


}