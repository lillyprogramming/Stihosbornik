"use strict"
const level3State={

preload:function() 

{    
    game.load.image("library", "images/map/map.png");   
    game.load.image("receptionb", "images/map/receptionb.png");
    game.load.image("readingloungeb", "images/map/readingloungeb.png");
    game.load.image("hiddenbooksb", "images/map/hiddenbooksb.png");
    inventoryPreload();
},

create:function()

{
    game.add.image(0, 0, "library");
    gameObjs(arrLibrary);

    //това е за inventory.js
    prevGameState = "third";
}
}
var arrLibrary = [
    {name: "readingloungeb", x: 989, y: 320}, 
    {name: "hiddenbooksb", x: 455, y: 343}, 
    {name: "receptionb", x: 640,y: 223}
];