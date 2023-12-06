"use strict"
const level13State={

preload:function() 

{
    game.load.image("submitb", "images/extras/submitb.png");
},

create:function()

{
    game.stage.backgroundColor = "#D6D6D6";
    game.add.text(100, 20, "Направете поне 3 думи чрез разместване на буквите на думата Събота. \n Думите трябва да са поне 3-буквени.");
    const styleAnnagram={ backgroundColor: "#E0E1DD", fontSize: '75px', fill: '#292929', fontFamily: "Brush Script MT"}

    //all keyboard stuff
    backspace = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    game.add.button(550, 600, "submitb", submitInput, this);

    const saturdayArr = ["С", "Ъ", "Б", "О", "Т", "А"];
    var groupSaturday=game.add.group();
    saturdayArr.forEach(x => {
        var saturdayLetter = game.add.text(10, 10, " "+ x +" ", styleAnnagram);
        saturdayLetter.inputEnabled = true;
        groupSaturday.add(saturdayLetter);
    })
    groupSaturday.callAll('events.onInputDown.add', 'events.onInputDown', createUserInput, this);
    alignThings(6, 10, 120, 250, 300, 200, groupSaturday);
    textInput = game.add.text(500, 360, "", styleAnnagram);
    textOutput = game.add.text(350, 480, "", styleAnnagram);
},

update:function() {  
  textInput.setText(wordToCheck);
  textOutput.setText(guessedCorrectly);
  
  //freeToClick е switch,който съществува за да може действието да е еднократно.
  if(backspace.isDown && freeToClick == false) {
    freeToClick = true;
    //backspace-a изтрива последната буква от sting-a
    wordToCheck = wordToCheck.substring(0, wordToCheck.length - 1);
  }
  if(enter.isDown && freeToClick == false) {
    freeToClick = true;
    //enter прави същото нещо като бутона submitButton, за улеснение на user-a
    submitInput();
  }
  if(backspace.isUp && enter.isUp) {
    freeToClick = false;
  }
}
}
const submitInput = _ => {
    const annagrams = ["басът", "асът", "оста", "асо", "бос", "боса", "соба", "оса", "боа", "сто", "бас", "тас", "бот", "бота"];
    annagrams.forEach(x => {
      if(x == wordToCheck.toLowerCase() && guessedCorrectly.indexOf(" " + wordToCheck + " ") == -1) {
        guessedCorrectly.push(" " + x.toUpperCase() + " ");
      }
    })
    checkIfWinGame();
    wordToCheck = "";
}

const checkIfWinGame = _ => {
  if(guessedCorrectly.length >= 3) {
      wonMiniGame("Аннаграма", 'fifth', arrNewspaper,"annagramb", "subota");
  }
}
function createUserInput(item) {
  var char = item.text.trim();
  if(wordToCheck.indexOf(char) == -1) {
     wordToCheck += char; 
  }
}

let enter, backspace, freeToClick, wordToCheck = "";
let textInput, textOutput, guessedCorrectly = [];