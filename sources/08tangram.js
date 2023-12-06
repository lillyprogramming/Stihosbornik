"use strict"
const level9State={

preload:function() 

{
    //преди идеята беше да бъдат цветни, и за това са кръстени според цветовете си. Да не се обръща внимание на това, вижте масива possiblePlacements (ред 77) за повече информация.
    game.load.image("backTangram", "images/tangram/backTangram.png");
    game.load.image("tribl", "images/tangram/tri_bl.png");
    game.load.image("trigr", "images/tangram/tri_gr.png");
    game.load.image("tripi", "images/tangram/tri_pi.png");
    game.load.image("trior", "images/tangram/tri_or.png");
    game.load.image("triye", "images/tangram/tri_ye.png");
    game.load.image("trapezoid", "images/tangram/trapezoid.png");
    game.load.image("square", "images/tangram/square.png");
    game.load.image("tanFish", "images/tangram/fish.png");
},

create:function()

{
    game.add.image(0, 0, "backTangram");
    game.add.text(50, 50, "Подредете камъчетата във формата на нарисуваната риба. \n Обръщайте ги с десния клавиш на мишката.");
    //в следващите 9 реда създавам групата на фигурите
    var shapes=game.add.group();
    shapeArr.forEach(x => {
      var shape = shapes.create(0, 0, x, 0);
      shape.inputEnabled = true;
      shape.input.enableDrag(false, true);
      shape.anchor.setTo(0.5)
      shape.events.onDragStop.add(function onDragStopShape(shape) { checkIfWin(shape);}, this);
  })
  shapes.callAll('events.onInputDown.add', 'events.onInputDown', Rotate);
  //това е за да се подредят подобаващо
  alignThings(3, 10, 200, 250, 100, 100, shapes);
}
}

//използвам тук arrow functions за красота и намаление на кода
const Rotate = item => {
  //конкретно за десния клавиш на мишката
  if(game.input.activePointer.rightButton.isDown) {
       item.angle += 45; 
  }
}

function checkIfWin(shape) {

    for(var i = 0; i < possiblePlacements.length; i ++) {
        if(possiblePlacements[i].key == shape.key && inRange(possiblePlacements[i].x, shape.x) && inRange(possiblePlacements[i].y, shape.y) && possiblePlacements[i].angle == shape.angle) {
          shape.x = possiblePlacements[i].x;
          shape.y = possiblePlacements[i].y;
          shape.inputEnabled = false;
          possiblePlacements = possiblePlacements.filter(x => x.key != shape.key && x.x != shape.x && x.y != shape.y );
        }
    }
    if(possiblePlacements.length == 0) {
        wonTangram = true;
        var tanFish = game.add.image(0, 0, "tanFish");
        tanFish.alpha = 0;

        //това е за анимацията на рибата fade in
        game.add.tween(tanFish).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        game.time.events.add(Phaser.Timer.SECOND * 4, function fadeFish() { wonMiniGame("Танграм", 'sixth', arrSea,"tangramb", "lijatotoizteche");}, this);
    }
}
//позволявам си да използвам arrow functions на местата където функцията е малка, но все пак твърде голяма, че спокойно да я създада nested.
//функция, която проверява дали фигура е достатъчно близка че да "кликне" на място
const inRange = (num, other) => {
  return num >= other - 25 && num <= other + 25;
}

let shapeArr = ["tribl", "trigr", "tripi", "trior", "triye", "trapezoid", "square"];
let wonTangram = false;

//всички възможностти за добре направена риба фигура
var possiblePlacements = [
{key: "tribl", x: 455, y: 386, angle: -45}, 
{key: "trigr", x: 455, y: 386, angle: -135}, 
{key: "trigr", x: 454, y: 275, angle: -45},
{key: "tribl", x: 456, y: 275, angle: 45}, 
{key: "trior", x: 720, y: 276, angle: 135}, 
{key: "tripi", x: 538, y: 415, angle: -45}, 
{key: "tripi", x:540 , y:250 ,angle: -135}, 
{key: "triye", x:540 , y:250 ,angle: -45},
{key: "triye", x: 538, y: 415, angle: 45}, 
{key: "trapezoid", x: 672, y: 388, angle: 135}, 
{key: "trapezoid", x: 672, y: 388, angle: -45}, 
{key: "square", x: 562, y: 331, angle: 45}, 
{key: "square", x: 562, y: 331, angle: -45}, 
{key: "square", x: 562, y: 331, angle: 135}, 
{key: "square", x: 562, y: 331, angle: -135}
];
