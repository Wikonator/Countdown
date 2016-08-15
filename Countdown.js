var events = require("events");
// var litchMaker = Object.create(new theLitch.EventEmitter);


// console.log(litch);

function MakeANewOne(x) {
    var zombies = this
    if ( x < 0) {
        return
    } else {
      var doom = x;
      setTimeout(function() {
        doom--;
        zombies.emit("ping", doom);
        new MakeANewOne(doom);
      }
      , 1000);
    }

}

MakeANewOne.prototype = new events.EventEmitter();


module.exports.MakeANewOne = MakeANewOne;
