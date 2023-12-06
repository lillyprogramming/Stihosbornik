"use strict"
const level8State={

create:function()

{
    game.stage.backgroundColor = "#9DD9D2";
    game.input.keyboard.addCallbacks(this, null, null, checkHang);

    //рисува тайната дума, но в съшия цвят като фона и не се вижда
    secret = game.make.bitmapData(1100, 400);
    secret.context.font = '125px Arial';
    secret.context.fillStyle = '#9DD9D2';
    secret.context.fillText(word, 50, 350);
    secret.addToWorld();

    game.add.text(160, 250, "_ _ _ _ _ _ _ _", {fontSize: "145px", fontFamily: "Arial", fill: "aliceblue"});

    //за да не се обърка нещо при рестартирането
    correct = [];
    score = [],
    lettersGuesses = [],
    guesses = 10;

    const hangmanStyle = {fontSize: '25px', fill: '#1A6161', fontFamily: "Brush Script MT"};
  
    currentText = game.add.text(50, 550, "Отгатнете Думата ", hangmanStyle);
    guessesText = game.add.text(50, 600, "Имате Още " + guesses + " Опита.", hangmanStyle);
    lettersGuessed = game.add.text(50, 650, "Неуспешни опити:  " + lettersGuesses, hangmanStyle);
}, 

update:function()

{ 
  //проверява дали играта е спечелена
  if(score.length == 7) {
    currentText.setText("Браво!");
    timer ++;
    if(timer >= 100) {
        timer = 0; 
        hang = true;
        wonMiniGame("Бесеница", "second",arrReception, "chestb", "lunapark");
    };
  }
  guessesText.setText("Имате Още " + guesses + " Опита.");
  lettersGuessed.setText("Неуспешни опити:  " + lettersGuesses);
}
}
function checkHang(char) {
    //cls изтрива цялата bitmat Data
    secret.cls();
    var spaceBetween = 125;
    char = char.toUpperCase();
    if(lettersGuesses.indexOf(" " + char) == -1 && !/[^а-яА-Я]/.test(char)) {
        lettersGuesses.push(" " + char);
        guesses--;
    }
    //проверява дали играта продължава и дали инпута е на кирилица
    if (/[^а-яА-Я]/.test(char)) {
          currentText.setText("Моля Пишете на Кирилица.");
          game.time.events.add(Phaser.Timer.SECOND * 2, function wrongChars() {currentText.setText("Отгатнете Думата ");}, this);
    }
    if(guesses > 0) {
      for (var i = 0; i < word.length; i++)
      {
          var letter = word.charAt(i);
          if (char === letter && char != " ")
          {
              correct[letter] = true;
              if(score.indexOf(char) == -1) {score.push(char);}
              lettersGuesses = lettersGuesses.filter(function(value){ return value.trim() != char.toUpperCase()});
              //тъй като "а" се повтаря
              if(char == 'А') {guesses+=0.5;}
              else {guesses++;}
          }
          if (correct[letter])
          {
              secret.context.fillStyle = 'aliceblue';
          }
          else
          {
              secret.context.fillStyle = '#9DD9D2';
          }
          secret.context.fillText(letter, spaceBetween + 40, 350);

          spaceBetween += secret.context.measureText(letter).width;
      }
    }
    else {
          currentText.setText("Загубихте. Опитайте отново.");
          guesses = 0;
          game.time.events.add(Phaser.Timer.SECOND * 2, function outOfGuesses() {game.state.start('second', level2State);}, this);
    }
}
var word = "Л У Н А П А Р К";
var correct, score, guesses, lettersGuessed;
var secret, currentText, lettersGuesses, guessesText;