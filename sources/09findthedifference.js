"use strict"
const level10State={

preload:function() 

{
    game.load.image('dAfter', 'images/findTheDifferences/differencesAfter.png');
    game.load.image('d1', 'images/findTheDifferences/difference1.png');
    game.load.image('d2', 'images/findTheDifferences/difference2.png');
    game.load.image('d3', 'images/findTheDifferences/difference3.png');
    game.load.image('d4', 'images/findTheDifferences/difference4.png');
    game.load.image('d5', 'images/findTheDifferences/difference5.png');
    game.load.image('d6', 'images/findTheDifferences/difference6.png');
    game.load.image('hintDiff', 'images/extras/hint.png');
    game.load.audio("pop", ["sounds/pop.wav"]);
},

create:function()

{
    game.stage.backgroundColor = "#ccac95";
    diffLeftText = game.add.text(0, 300, "Открийте " + diffLefts + "-те разлики\n в долната картина.");

    game.add.image(300,410,"dAfter");
    game.add.image(300, -5, 'dAfter');

    var diffs=game.add.group();
    differences.forEach(x => {
        var diff = diffs.create(x.x1, x.y1, x.name, 0);
        diff.inputEnabled = true;
        diff.anchor.setTo(0.5);
    })
    diffs.callAll('events.onInputDown.add', 'events.onInputDown', foundDifference, this);
    game.add.button(0, 0, "hintDiff", giveHint, this);

    graphics = game.add.graphics(0, 0);
}
}
//масив от всички разлики
let differences = [
  {name: "d1", x1: 1029, y1: 438, width: 131}, 
  {name: "d2", x1: 831, y1: 567, width: 120}, 
  {name: "d3", x1: 738, y1: 452, width: 40}, 
  {name: "d4", x1: 985, y1: 647, width: 42}, 
  {name: "d5", x1: 433, y1: 648, width: 53},
  {name: "d6", x1: 388, y1: 630, width: 46}
];

//създава кръгче около разликата.
function giveHint() {
  var circle = new Phaser.Circle(differences[0].x1, differences[0].y1, differences[0].width);
  graphics.lineStyle(5, 0x1F7A8C, 1);
  graphics.drawCircle(circle.x, circle.y, circle.diameter);
  game.time.events.add(Phaser.Timer.SECOND * 1, function fadeHint() { graphics.clear(); }, this);
}
function foundDifference(item) {
  pop.play();
  item.alpha = 0;
  diffLefts --;
  if(diffLefts == 1) {
    diffLeftText.setText("Открийте последната \nразлика в \nдолната картина.");
  }
  else {
    diffLeftText.setText("Открийте " + diffLefts + "-те разлики\n в долната картина.");
  }
  for(var i = 0; i < differences.length; i ++) {
    if(differences[i].name == item.key) {
        differences = differences.filter(x => x.name != item.key);
    }
  }
  checkDiffVictory();
  item.destroy();
}
//wonMiniGame() се намира в 00intro.js
function checkDiffVictory() {
  if(differences.length <= 0) {
    diffDone = true;
    wonMiniGame("Намери Разликата", 'fifth', arrNewspaper,"newspicturesb", "vestnitzi");
  }
}
let graphics, diffDone = false, diffLefts = 6, diffLeftText;