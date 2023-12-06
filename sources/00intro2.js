"use strict"

const level1State={ 

preload:function() 

{
    game.load.image("introScreen", "images/introAndend/intro.png");  
    game.load.image("toInstructionsb", "images/introAndend/instructionsb.png");
    game.load.image("instructions", "images/introAndend/instructions.png");
    game.load.image("startGameb", "images/introAndend/startb.png");
    game.load.audio("win", ["sounds/youWin.wav"]);
    game.load.audio("music", ["sounds/arabesque.ogg"]);
    game.load.audio("pop", ["sounds/pop.wav"]);
},

create:function()

{
  game.add.image(0, 0, "instructions");
  game.add.image(0, 0, "introScreen");
  win = game.add.audio("win");
  pop = game.add.audio("pop");
  music = game.add.audio("music");
  music.loop = true;
  music.play();

  gameObjs(arrIntro);
}
}

let timer = 0, poemNum = 1, win, music, pop;
let arrIntro = [
  {name: "toInstructionsb", x: 255,y: 165}
];

//Тук са всички мини игри, наградата, която получавате от тях, къде се намират, и хинта, който ще излезе ако натиснете "hint".
let miniGamesArr = [
{minigame: "Бесеница", hint: " една от поемите е \nнякъде в една кутия в \nрецепцията, но не се сещам \nза заглавието."}, 
{minigame: "Намери Разликата", hint: " бяха писали за една \nот поемите й във вестника, \nкойто се намира във ВИП стаята. \nДобре би било да проверим там."}, 
{minigame: "Аннаграма", hint: " думата на деня във \nвестника, който се намира във ВИП \nстаята, беше също така и име на \nедна от нейните поеми."}, 
{minigame: "Тест за Петя Дубарова", hint: " ключът за навън се \nдава само на познавачите на \nтворчеството на Петя Дубарова, \nа една от книгите в читалнята \nпроверява дали сте такъв."}, 
{minigame: "Оцветяване", hint: " поемата на Петя \nДубарова, \"Есенна Вечер\", е в \nчиталнята. Сигурно ще я \nоткрием там."},
{minigame: "Танграм", hint: " на плажа се намираше \nпоемата \"Лятото Изтече\"."}, 
{minigame: "Мемори Карти", hint: " има нещо странно с \nонези карти край морето."},
{hint: " вече открихте всичко."}
];

//за всяка мини игра, какво да стане като бъде мината
function wonMiniGame(name, stageName, arrName, buttonName, poemName) {
    win.play();
    if(name != "Тест за Петя Дубарова") {poemNum ++;}
    //изтрива играта от листа с мини игрите
    for(var i = 0; i < miniGamesArr.length; i ++) {
      if(miniGamesArr[i].minigame == name) {
        miniGamesArr.splice(i,1); 
      }
    }
    //изтрива бутона от листа с бутон на стаята
    for(var i = 0; i < arrName.length; i ++) {
      if(arrName[i].name == buttonName) {
        arrName.splice(i,1);
      }
    }
    arrPoems.push(poemName);
    game.world.removeAll();
    game.state.start(stageName);
  if(miniGamesArr.length <= 1) {
    game.state.start('fourteenth');
  }
}

//функциите с които ще се създават всички бутони в цялата игра.
function gameObjs(arrItemsInThisScene) {
  var objs=game.add.group();
  //първо добавям меню, помощ, и карта: нещата, които ще са в почти всяка сцена освен тези изредени отдолу:
  if(arrItemsInThisScene != arrIntro && arrItemsInThisScene != arrNewspaper && arrItemsInThisScene != arrOutro && arrItemsInThisScene != arrMenu) {arrItemsInThisScene.push(
    {name: "hint", x: 20, y: 15}, 
    {name: "map", x:140, y:15}, 
    {name: "inventory", x: 250, y: 15}
  );}
  arrItemsInThisScene.forEach(x => {
      var obj = game.add.button(x.x, x.y, x.name, goToObjectKey, this);
      obj.onInputOver.add(function objectTint(item) {item.tint = 0x93B7BE;}, this);
      obj.onInputOut.add(function objectUntint(item) {item.tint = 0xffffff;} , this);
      objs.add(obj);
  })
}
function goToObjectKey(item) {
  if(item.key != "pianob") {
    pop.play();
  }
  //b накрая е за button
  //всичко, което един бутон може да направи в играта:
  switch(item.key) {
    case "startGameb":item.destroy(); game.state.start('second'); break;
    case "receptionb": item.destroy(); game.state.start('second');break;
    case "map": item.destroy(); game.state.start('third');break;  
    case "readingloungeb": item.destroy(); game.state.start('fourth');break;
    case "hiddenbooksb": item.destroy(); game.state.start('fifth');break;
    case "doorb": item.destroy(); game.state.start('sixth'); break;
    case "canvasb": item.destroy(); game.state.start('seventh'); break;
    case "chestb": item.destroy(); game.state.start('eighth');break;
    case "tangramb": item.destroy(); game.state.start('ninth');break;
    case "newspicturesb": item.destroy(); game.state.start('tenth');break;
    case "bigbookb": item.destroy(); game.state.start("eleventh",);break;
    case "memorycardsb": item.destroy(); game.state.start('twelfth');break;
    case "annagramb": item.destroy(); game.state.start('thirteenth');break;
    case "inventory": item.destroy(); game.state.start('fifteenth');break;
    case "backb": item.destroy(); game.state.start(prevGameState); break;
    case "hint": giveHintNorm();break;
    case "toInstructionsb": item.destroy(); goToInstructions();break;
    case "pianob": playPianoSound();break;
    case "newspaperb": item.destroy(); openNewspaper();break;
    case "downloadB": downloadFile();break;
  }
}
//долната черта: _ означава, че функцията не се нуждае от аргументи
const goToInstructions = _ => {
  game.add.image(0, 0, "instructions");
  gameObjs(arrIntro = [{name: "startGameb", x: 345,y: 570}]);
}