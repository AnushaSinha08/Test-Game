var canvas, bgIMG;

var gameState = 0;

var form, game;

var player, playerIMG;

var bg, bg2;

var NPCBOYIMG,NPCGIRLIMG;

var NPCboy,NPCgirl;

var Meteor1, Meteor2;

var MeteorIMG1, MeteorIMG2;

var Meteor; 

//var life;

function preload() {

  bgIMG = loadImage('Sprites/Background.JPG');

  NPCBOYIMG = loadImage('Sprites/Boy NPC.png');

  NPCGIRLIMG = loadImage('Sprites/Girl NPC.png');

  MeteorIMG1 - loadImage('Sprites/meteors.png');

  MeteorIMG2 = loadImage('Sprites/single meteor.png');

  playerIMG = loadImage('Sprites/playerpic.png');

  bg2 = loadImage('Sprites/Background Image.jpeg')
}


function setup(){
  canvas = createCanvas(1500,800);
  
  Meteor = new Group(); 

  form = new Form ();
  form.display();
}


function draw(){
 var  myVar =0;
  if(gameState === 1){
    clear();
    
    myFunction();
    
    
    
  }
  
  if(gameState === 2){
    game =new Game();
    clear();
     game.playlevel1() 
  }


  function alertFunc() {
    gameState =2;
    console.log(gameState)
  }
  function myFunction() {
    setTimeout(alertFunc, 1000);
   }

}
