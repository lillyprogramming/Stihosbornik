"use strict"
const level11State={

create: function() {
  const style={ fontSize: '50px', fill: '#2E2823', fontFamily: "Brush Script MT"};

  quest = game.add.text(30, 100, " ", {fontSize: '55px', fill: '#000', fontFamily: "Brush Script MT"});

  answ_1 = game.add.text(100, 200, " ", style);
  answ_2 = game.add.text(100, 300, " ", style);
  answ_3 = game.add.text(100, 400, " ", style);
  answ_4 = game.add.text(100, 500, " ", style);

  truth = game.add.text(400, 600, " ", {fontSize: '75px', fill: '#923A41', fontFamily: "Brush Script MT"});  
},

update:function()

{ 
    game.stage.backgroundColor = "#C4BBAF";
  //играта избира кой въпрос да даде според това колко вече са отговорени правилно
  switch(ansBoolAr.filter(x=>x===true).length) {
    case 0: createQuiz(
			"1. Петя Дубарова е:",
			"а) Румънска поетеса", false,
			"б) Художничка", false,
      "в) Певица", false,
      "г) Българска поетеса", true
    ); break;
    case 1: createQuiz(
			"2. Родена е на 25 Април, 1962г.",
			"а) Вярно", true,
			"б) Грешно", false,
    ); break;
    case 2: createQuiz(
			"3. Написала е текста на песента: ",
			"а) \"Среща\" - Щурците", false,
			"б) \"Златната Рибка\" - Металика", false,
      "в) \"Доброта\" - Росица Кирилова", true,
      "г) \"Една Българска Роза\" - Паша Христова", false
    ); break;
          case 3: createQuiz(
			"4. Написала е \"Две хубави oчи\".",
			"а) Вярно", false,
			"б) Грешно", true,
    ); break;
          case 4: createQuiz(
			"5. Има паметник на Петя Дубарова в: ",
			"а) София", false,
			"б) Бургас", true,
      "в) Пловдив", false,
      "г) Хасково", false
    ); break;
    case 5:
      doorIsUnlocked = true;
      wonMiniGame("Тест за Петя Дубарова", "fourth", arrReadingL, "bigbookb", "key"); break;
  }
  checkAnswer();
  if(ansBoolAr[ansBoolAr.length -1] == false) {
    truth.setText("ГРЕШНО!");   
  }
  else {
    truth.setText(" ");   
  }
}
}
//тук създавам функция, чиито параметри ще бъдат въпросите и отговорите
//някои въпроси имат само 2 възможни отговора, и за това съм задала "default value" на 3-тия и 4-тия отговор.
function createQuiz(question, answer1, answer1_bool, answer2, answer2_bool, answer3 = " ", answer3_bool = false, answer4 = " ", answer4_bool = false){

  quest.setText(question);

  answ_1.setText(answer1);
  answ_1.inputEnabled = true;
  answ_1.events.onInputDown.add( function a1() {answer0 = answer1;});
  answ_2.setText(answer2);
  answ_2.inputEnabled = true;
  answ_2.events.onInputDown.add(function a2() {answer0 = answer2;});
  answ_3.setText(answer3);
  answ_3.inputEnabled = true;
  answ_3.events.onInputDown.add(function a3() {answer0 = answer3;});
  answ_4.setText(answer4);
  answ_4.inputEnabled = true;
  answ_4.events.onInputDown.add(function a4() {answer0 = answer4;});
  
  //return value е под формата на масив, защото иначе приема само един аргумент.
  return (realValues = [answer1, answer1_bool, answer2, answer2_bool, answer3, answer3_bool, answer4, answer4_bool]);
}
function checkAnswer() {		
    answer1 = realValues[0];
    answer1_bool = realValues[1];
    answer2 = realValues[2];
    answer2_bool = realValues[3];
    answer3 = realValues[4];
    answer3_bool = realValues[5];
    answer4 = realValues[6];
    answer4_bool = realValues[7];
  //свързва отговореното с bool-а, който съвпада с него
  switch(answer0) {
    case answer1: ansBoolAr.push(answer1_bool); return answer1_bool;
    case answer2: ansBoolAr.push(answer2_bool); return answer2_bool; 
    case answer3: ansBoolAr.push(answer3_bool); return answer3_bool; 
    case answer4: ansBoolAr.push(answer4_bool); return answer4_bool; 
  }
}
let quest, answ_1, answ_2, answ_3, answ_4, answer1_bool, answer2_bool, answer3_bool, answer4_bool, answer1, answer2, answer3, answer4, answer0, realValues, ansBoolAr = [], truth;