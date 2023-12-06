"use strict"
const level6State={

preload:function() 

{
    game.load.image("sea", "images/sea/sea.png")   
    game.load.image("fish", "images/sea/fish.png")   
    game.load.image("tangramb", "images/sea/tangramb.png")
    game.load.image("memorycardsb", "images/sea/memorycardsb.png")
    inventoryPreload();
},

create:function()

{
    prevGameState = "sixth";

    game.add.image(0, 0, "sea");
    gameObjs(arrSea);
    //доабвя риба в морето
    if(wonTangram == true) {
        game.add.image(100,200, "fish");
    }
}
}

var arrSea = [
    {name: "tangramb", x: 627,y: 347}, 
    {name: "memorycardsb", x: 1020, y: 395}
];