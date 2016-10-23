function makeAdder(x) {
	
  return function  myfirst1(y) {
	  console.log(x+"  x");
    return x + y;
	
  };
}

var add5 = makeAdder(5);

console.log(add5+"   function");
//var add10 = makeAdder(10);



//console.log(add5(2));  // 7
//console.log(add10(2)); // 12