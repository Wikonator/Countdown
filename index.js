var apocalypseImports = require("./Countdown");

var makeANewOne = apocalypseImports.MakeANewOne;

new makeANewOne(5).on("ping" , function (doom) {
    if (doom == 0) {
        console.log("ARISE MY MINIONS!!");
    }
    else {
    console.log("Doom comes in: " + doom);
    }
});
