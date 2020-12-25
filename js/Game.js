class Game {
  constructor(){

  }

  

  playlevel1(){
    form.hide();
     background(bg2)

    player = createSprite(190,174,60,70);
    player.addImage('playerIMG',playerIMG);
    player.scale = 0.5
  
    if (frameCount % 60 === 0) {
     Meteor1 = createSprite(1500,200,30,100);
     //Meteor1.addImage('MeteorIMG1',MeteorIMG1);
     Meteor1.y = Math.round(random(0,500));
     Meteor1.velocityX = -10;
     Meteor1.scale = 0.5;
     Meteor.add(Meteor1);

      
    }
    
    if (frameCount % 30 === 0) {
      Meteor2 = createSprite(1500,200,30,100);
      Meteor2.addImage('MeteorIMG2',MeteorIMG2);
      //Meteor2.x = Math.round(random(0,1500));
      Meteor2.y = Math.round(random(0,500));
      Meteor2.velocityX = -5;
      Meteor2.scale = 0.5;
      Meteor.add(Meteor2);
      

    }
    
    if (keyDown(UP_ARROW)) {
     player.y = player.y - 100;
     player.x = player.x - 100;
    }
    
    if (keyDown(DOWN_ARROW)) {
    player.y = player.y + 100;
    player.x = player.x + 100;
    }
    
    
    if (keyDown(RIGHT_ARROW)) {
     player.x = player.x + 100;
     player.y = player.y + 100;
    }


    if (keyDown(LEFT_ARROW)) {
     player.x = player.x - 100;
     player.y = player.y - 100;
    }

        
    drawSprites();
  }
}
