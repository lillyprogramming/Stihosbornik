"use strict"
const level2State={

preload:function() 

{
    game.load.image("reception", "images/reception/reception.png");  
    game.load.image("chestb", "images/reception/chestb.png");
    game.load.image("receptionA", "images/reception/receptionAfter.png");
    inventoryPreload();
},

create:function()

{
  if(hang) {
    game.add.image(0, 0, "receptionA");
  }
  else {
    game.add.image(0, 0, "reception");
  }
  gameObjs(arrReception);
  prevGameState = "second";
}
}

let arrReception = [
  {name: "chestb", x: 0, y: 622}
];
let hang = false;

function inventoryPreload() {
  game.load.image("map", "images/extras/mapNorm.png");
  game.load.image("hint", "images/extras/hint.png");
  game.load.image("inventory", "images/extras/inventory.png");
  game.load.image("hintBackSpace", "images/extras/hintBackSpace.png");
  game.load.image("clickOut", "images/extras/hintClickOut.png");
}
function giveHintNorm() {
  var hintback = game.add.image(0, 0, "hintBackSpace");
  var hintText = game.add.text(210, 260, "Мисля, че" + miniGamesArr[0].hint,{textAlign:"center", fontSize: "55px", fontFamily: "'Brush Script MT', cursive", fill: "#86857a"});
  //nested function
  var clickOut = game.add.button(1060, 190, "clickOut", function clickOutOfHint() { clickOut.destroy(); hintback.destroy(); hintText.destroy();}, this);
}

