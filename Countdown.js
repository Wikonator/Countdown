var events = require("events");
// var litchMaker = Object.create(new theLitch.EventEmitter);
//
var litch = new events.EventEmitter();

// console.log(litch);

function makeANewOne(x) {
    if ( x < 0) {
        return
    } else {
      var doom = x;
      setTimeout(function() {
        doom--
        litch.emit("ping", doom)
      }
      , 1000);
    }

}



module.exports.makeANewOne = makeANewOne;
module.exports.litch = litch;
