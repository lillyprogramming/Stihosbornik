"use strict"
const level5State={

preload:function() 

{
    game.load.image("hiddenbooks", "images/hiddenB/hiddenbooks.png");
    game.load.image("annagramb", "images/hiddenB/annagramb.png");
    game.load.image("newspaperb", "images/hiddenB/newspaperb.png");
    game.load.image("newspaper", "images/hiddenB/newspaper.png");
    game.load.image("newspaperAfter", "images/hiddenB/newspaperAfter.png");
    game.load.image("newspicturesb", "images/hiddenB/newspicturesb.png");
    game.load.image("doorb", "images/hiddenB/doorb.png");
    inventoryPreload();
},

create:function()

{
    prevGameState = "fifth";

    game.add.image(0, 0, "hiddenbooks");
    if(doorIsUnlocked) {
        gameObjs([{name: "doorb", x: 195, y: 84}]);
    }
    gameObjs(arrHiddenB);
    news = game.add.image(0, 0, "newspaper");
    news.alpha = 0;

    const newsAfter = game.add.image(0, 0, "newspaperAfter");
    newsAfter.alpha = 0;
    
    //добави към следващия if statement за да можеш да направиш ботон за връщане обратно
    if(openNews) {
        arrHiddenB.shift();
        news.alpha = 1;
        gameObjs(arrNewspaper);
    }
    if(diffDone == true) {
        newsAfter.alpha = 1;
    }
    if(arrNewspaper.length <= 0) {
        news.alpha = 0;
        newsAfter.alpha = 0;
    }
}
}
function openNewspaper() {
    news.alpha = 1;
    openNews = true;
    gameObjs(arrNewspaper);
}
let openNews = false, news, doorIsUnlocked = false;
let arrHiddenB = [
    {name: "newspaperb", x: 371, y: 694}
]; 
let arrNewspaper = [
    {name: "newspicturesb", x: 85, y: 400}, 
    {name: "annagramb", x: 650, y: 320}
];
