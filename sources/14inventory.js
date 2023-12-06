"use strict"
const level15State={

preload:function() 

{
    game.load.image("backb", "images/extras/backb.png");
    game.load.image("key", "images/inventory/key.png");
    game.load.image("fullScreenB", "images/inventory/fullScreenB.png");
    game.load.image("unFullScreenB", "images/inventory/unFullScreenB.png");
    game.load.image("soundb", "images/inventory/soundb.png");
    game.load.image("sandwich", "images/inventory/sandwich.png");
    game.load.image("crumbs", "images/inventory/crumbs.png");
    game.load.image("muteb", "images/inventory/muteb.png");
    game.load.image("noshtnadgrada", "images/inventory/poems/noshtnadgrada.png");
    game.load.image("lijatotoizteche", "images/inventory/poems/lijatotoizteche.png");
    game.load.image("lunapark", "images/inventory/poems/lunapark.png");
    game.load.image("vestnitzi", "images/inventory/poems/vestnitzi.png");
    game.load.image("subota", "images/inventory/poems/subota.png");
    game.load.image("esennavecher", "images/inventory/poems/esennavecher.png");
    game.load.image("moretoiaz", "images/inventory/poems/moretoiaz.png");
    game.load.image("lightM", "images/inventory/lightmode.png");
    game.load.image("darkM", "images/inventory/darkmode.png");
},

create:function()

{
    game.stage.backgroundColor = "#C4BBAF";

    //за да може целия екран да се оголеми
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

    poems=game.add.group();
    arrPoems.forEach(x => {
        var poem = game.add.button(0, 0, x, menuDoSmth, this);
        poem.width = 200;
        poem.height = 200;
        poems.add(poem);
    })
    alignThings(4, 10, 250, 250, 50, 50, poems);
    gameObjs(arrMenu);

    unFullScreenB = game.add.image(1100, 650, "unFullScreenB", 0);
    fullScreenB = game.add.button(1100, 650, "fullScreenB", goFull, this);

    game.add.button(950, 650, "soundb", dealWithSoundB, this);
    muteb = game.add.button(950, 650, "muteb", dealWithSoundB, this);

    darkM = game.add.image(800, 650, "darkM", 0);
    lightM = game.add.button(800, 650, "lightM", lightDarkMode, this);

    poemText = game.add.text(50, 700, "За сега имате " + poemNum + "/7 поеми.", {fontSize: "40px", fontFamily: "'Brush Script MT', cursive", fill: "#2B4162"});
},

update: function() {
    if(music.isPlaying == true) {
        muteb.alpha = 1;
    }
    else {
        muteb.alpha = 0;
    }
    if (game.scale.isFullScreen)
    {
        fullScreenB.alpha = 0;
        unFullScreenB.alpha = 1;
    }
    else
    {
        fullScreenB.alpha = 1;
        unFullScreenB.alpha = 0;
    }
    if(document.getElementsByTagName("body")[0].style.backgroundColor == 'rgb(62, 57, 57)'){
        lightM.alpha = 1;
        darkM.alpha = 0;
    }
    else {
        lightM.alpha = 0;
        darkM.alpha = 1;
    }
}
}
function menuDoSmth(item) {
    if(item.key == "sandwich") {
        arrPoems[0] = "crumbs";
        poemText.setText("Вкусно.");
        game.time.events.add(Phaser.Timer.SECOND * 0.2, function eatSandwich() {poemText.setText("За сега имате " + poemNum + "/7 поеми."); game.state.start("fifteenth")}, this);
    }
    else if(item.key != "key" && item.key != "crumbs"){
        var selected = game.add.button(0, 0, item.key, function killSelected() {selected.destroy();}, this)
    }
}
function dealWithSoundB() {
    if(music.isPlaying == true) {
        music.pause();
    }
    else {
        music.resume();
    }
}
function goFull() {
    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }
}
function lightDarkMode() {
    if(document.getElementsByTagName("body")[0].style.backgroundColor == 'rgb(62, 57, 57)'){
        document.getElementsByTagName("body")[0].style = 'background-color: aliceblue;';   
        document.getElementsByTagName("div")[0].style = 'background-color: aliceblue;';   
    }
    else {
        document.getElementsByTagName("body")[0].style = 'background-color: #3e3939;';   
        document.getElementsByTagName("div")[0].style = 'background-color: #3e3939;';   
    }
}
let arrPoems = ["sandwich", "noshtnadgrada"];
var arrMenu = [
    {name: "backb", x: 1100, y: 20}
];
var prevGameState, poems, fullScreenB, unFullScreenB, muteb, soundb, poemText, darkM, lightM;