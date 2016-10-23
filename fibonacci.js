
fibnicseries(20);



    function fibnicseries(n) {

    	var fib = [];
    	fib[0] = 0;
    	fib[1] = 1;

    	for(var i= 2; i < n; i++) {
    		fib[i] = fib[i-2] + fib[i-1];
    	}

    	for(var j = 0; j < fib.length; j++) {
    		console.log(fib[j]);
    	}
    }