"use strict"
const level4State={

preload:function() 

{
    game.load.image("readinglounge", "images/readingL/readinglounge.png"); 
    game.load.image("readingloungebefore", "images/readingL/readingloungebefore.png"); 
    game.load.image("canvasb", "images/readingL/canvasb.png");
    game.load.image("bigbookb", "images/readingL/bigbookb.png");
    game.load.image("pianob", "images/readingL/pianob.png");
    game.load.audio("piano", ["sounds/piano.wav"]);
    inventoryPreload();
},

create:function()

{    
    piano = game.add.audio("piano");
    //оцветената картина ще се покаже едвам щом е направена мини играта
    if(wonColoring) {
        game.add.image(0, 0, "readinglounge");
    }
    else {
        game.add.image(0, 0, "readingloungebefore");
    }
    gameObjs(arrReadingL);
    prevGameState = "fourth";
}
}

function playPianoSound() {
    piano.play();
}

let wonColoring = false, piano;
let arrReadingL = [
    {name: "bigbookb", x: 535, y: 550}, 
    {name: "canvasb", x: 1008,y: 40}, 
    {name: "pianob", x: 710, y: 278}
];