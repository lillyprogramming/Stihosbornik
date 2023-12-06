"use strict"

const game=new Phaser.Game(1273, 820, Phaser.AUTO,'game-canvas');
game.state.add('first',level1State);
game.state.add('second',level2State);
game.state.add('third',level3State);
game.state.add('fourth',level4State);
game.state.add('fifth',level5State);
game.state.add('sixth',level6State);
game.state.add('seventh',level7State);
game.state.add('eighth',level8State);
game.state.add('ninth',level9State);
game.state.add('tenth',level10State);
game.state.add("eleventh", level11State);
game.state.add('twelfth',level12State);
game.state.add('thirteenth',level13State);
game.state.add('fourteenth',level14State);
game.state.add('fifteenth',level15State);

game.state.start("first")

/*
first: intro screen: menu
second: reception desk: button to map and hangman computer
third: whole library map: teleportation buttons
fourth: reading lounge: piano and trivia, coloring
fifth: hidden books room: annagram game,  find the difference
sixth: sea: memory cards and tangram game
seventh: coloring: essenna vecher
eighth: hangman: lunapark
ninth: tangram: lijatoto izteche
tenth: find the difference: vestnitzi 
eleventh: trivia: key to the outside
twelfth: memory game: moreto i az
thirteenth: annagram: saturday
fourteenth: endscreen: credits and win screen
fifteenth: inventory + menu
sixteenth: connect: this
*/