 process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');

  process.stdin.on('data', function (text) {
    var mytext = util.inspect(text);
    console.log('received data:', mytext);
    if (text + "" === "quit\r\n") {
      console.log("inside if");
      done();
    }
  });

  function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
  }