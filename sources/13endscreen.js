"use strict"
const level14State={

preload:function() 

{
    game.load.image("endtro", "images/introAndend/endtro.png");
    game.load.image("downloadB", "images/introAndend/downloadb.png");
    game.load.image("confetti", "images/introAndend/confetti.png");
},

create:function()

{
  game.add.image(0, 0, "endtro");
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //това прави конфетито
  emitter = game.add.emitter(0, 0, 100);

  emitter.makeParticles('confetti');
  emitter.gravity = 200;

  game.input.onDown.add(makeConfetti, this);
  gameObjs(arrOutro);
}
}

let emitter;
let arrOutro = [
  {name: "downloadB", x: 285,y: 500}
];
function makeConfetti(pointer) {
    emitter.x = pointer.x;
    emitter.y = pointer.y;
    emitter.start(true, 2000, null, 10);
}
function downloadFile() {
  window.open('Stihosbornik.docx');
}