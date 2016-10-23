function makeFunc() {
  var name = "Mozilla";
  function displayName() {//this is a closure function
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();