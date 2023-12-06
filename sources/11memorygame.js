"use strict"
const level12State={

preload:function() 

{
    game.load.image("crab", "images/memory/crab.png");
    game.load.image("wave", "images/memory/wave.png" );
    game.load.image("clam", "images/memory/clam.png" );
    game.load.image("cardback", "images/memory/cardback.png" );
},

create:function()

{
    game.add.text(350, 50, "Намерете Двойката на Всяка от Картите.");
    game.stage.backgroundColor = "#DCDEE5";

    cards=game.add.group();
    cardbacks = game.add.group();
    arrMemory = shuffleCards(["crab", "clam", "wave", "crab", "clam", "wave"]);
    arrMemory.forEach(x => {
        cardbacks.create(0, 0, "cardback");
        cards.add(game.add.button(0, 0, x, turnOver, this));
    })
    alignThings(3, 10, 300, 350, 250, 120, cardbacks);
    alignThings(3, 10, 300, 350, 250, 120, cards);

    cards.setAll('alpha', 0);
    game.world.bringToTop(cards);
}
}
const alignThings = (top1, top2, top3, top4, middle, bottom, group) => {
  group.align(top1, top2, top3, top4);
  group.x = middle;
  group.y = bottom;
}

//разбърква картите, за да могат да са случайни
const shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const l = Math.floor(Math.random() * (i + 1));
        [array[i], array[l]] = [array[l], array[i]];
    }
  return array;
}

function checkVictory(numberOfOpenCards) {
  if(countDeadCards >= arrMemory.length) {
    wonMiniGame("Мемори Карти", 'sixth', arrSea,"memorycardsb", "moretoiaz");
  }
  //това обръща всички карти, когато две от тях вече са обърнати
  if(chosenCard.length >= numberOfOpenCards) {
      turnBack();
  }
}

function turnOver(item) {
  //проверява дали картата е същата
  if(item.alpha != 1) {
    chosenCard.push(item.key);
    item.alpha = 1;
    //изтриват се двете еднакви карти и обратната им страна от масива, щом са правилно избрани
    if(chosenCard[0] == chosenCard[1]) {
      chosenCard.forEach(x => {
          var card = cards.iterate('key', x, Phaser.Group.RETURN_CHILD);
          killBack(card.x, card.y);
          card.destroy();
          countDeadCards += 1;
      })
      checkVictory(2);
    }
    else {  
      checkVictory(3);
    }
  }
  else {
    turnBack();
  }
}
function killBack(cardx, cardy) {
  cardbacks.forEach(x => {
        if(x.x == cardx && x.y == cardy) {
          x.destroy();
       }
    })
}
const turnBack = _ => {
    chosenCard = [];
    cards.setAll('alpha', 0);
}
let arrMemory = [], chosenCard = [];
let countDeadCards = 0, cards, cardbacks;