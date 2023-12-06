"use strict"
const level7State={

preload:function() 

{
    game.load.image("coloredTree", "images/coloring/coloredtree.png" );
    game.load.image("uncoloredTree", "images/coloring/uncoloredtree.png" );
    game.load.image("treeleaves", "images/coloring/treeleaves.png" );
    game.load.image("treestump", "images/coloring/treestump.png" );
    game.load.image("fruit", "images/coloring/fruit.png" );
    game.load.image("redColor", "images/coloring/redpaint.png" );
    game.load.image("greenColor", "images/coloring/greenpaint.png" );
    game.load.image("brownColor", "images/coloring/brownpaint.png" );
},

create:function()

{    
    game.add.image(0, 0, "uncoloredTree");

    leaf = game.add.button(270, 40, "treeleaves", function colorLeaf() {leaf.tint = tintt;}, this);
    stump = game.add.button(477, 353, "treestump", function colorStump() {stump.tint = tintt;}, this);
  
    var fruits=game.add.group();

    const fruit1 = game.add.button(517, 175, 'fruit', 0);
    const fruit2 = game.add.button(371, 320, 'fruit', 0);
    const fruit3 = game.add.button(757, 295, 'fruit', 0);
    fruits.add(fruit1);
    fruits.add(fruit2);
    fruits.add(fruit3);
    
    fruits.setAll('inputEnabled', true);
    fruits.callAll('events.onInputDown.add', 'events.onInputDown', colorFruits);

    game.add.button(320, 759, "redColor", function colorRed() {tintt = 0xb75152;}, this);
    game.add.button(775, 761, "brownColor", function colorBrown() {tintt = 0x9d8777;}, this);
    game.add.button(540, 744, "greenColor", function colorGreen() {tintt = 0x67c19b;}, this);

    game.add.text(50,50,'Оцветете Дървото: ', {fill:'#141414'});
  
    coloredTree = game.add.image(0, 0, "coloredTree");
    coloredTree.alpha = 0;
}, 

update:function()

{ 
    //проверява дали играта е спечелена
    if(stump.tint == 10323831 && leaf.tint == 6799771 && coloredFruits.filter(x=>x===true).length == 3) {
        coloredTree.alpha = 1;
        timer ++;
        wonColoring = true;
        game.time.events.add(Phaser.Timer.SECOND * 2, function winColorGame() {
            wonMiniGame("Оцветяване", "fourth", arrReadingL, "canvasb", "esennavecher");}, this); 
   }
}
}
let tintt = 0xffffff, coloredFruits = [], stump, leaf, coloredTree;
//проверява дали всяко едно от плодовете в момента е червено
function colorFruits(item) {
  if(tintt == 0xb75152 && item.tint != 12013906) {
      coloredFruits.push(true);
  }  
  else if(tintt != 0xb75152 && item.tint == 12013906){
      coloredFruits.pop();
  } 
  item.tint = tintt;
} 