var apocalypseImports = require("./Countdown");

var ressurect = apocalypseImports.makeANewOne;
var litch = apocalypseImports.litch;


litch.on("ping" , function (doom) {
    if (doom == 0) {
        console.log("ARISE MY MINIONS!!");
    }
    else {
    console.log("Doom comes in: " + doom);
    ressurect(doom);
    }
});


new ressurect(5);
