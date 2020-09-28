var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["49b200a7-88b4-455e-a5d3-ba874344dfe7","1077ee7d-5036-4c9b-9bf1-a4bb5821e5e2"],"propsByKey":{"49b200a7-88b4-455e-a5d3-ba874344dfe7":{"name":"man","sourceUrl":null,"frameSize":{"x":31,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"axjOG1YWCpaFftuaMr3Yh8Xd_HvITftP","loadedFromSource":true,"saved":true,"sourceSize":{"x":31,"y":60},"rootRelativePath":"assets/49b200a7-88b4-455e-a5d3-ba874344dfe7.png"},"1077ee7d-5036-4c9b-9bf1-a4bb5821e5e2":{"name":"car","sourceUrl":null,"frameSize":{"x":120,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"nL6cJ5PYHSFvcbHyqTLTP76GJ9rGQnCL","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":30},"rootRelativePath":"assets/1077ee7d-5036-4c9b-9bf1-a4bb5821e5e2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating all objects
var Shankar=createSprite(385,370,50,50);
//give animation or image
Shankar.setAnimation("man");

var Car=createSprite(55,15,20,20);
Car.setAnimation("car");

var r1=createSprite(200,50,15,75);
//changing the colour
r1.shapeColor="white";

var r2=createSprite(200,150,15,75);
r2.shapeColor="white";

var r3=createSprite(200,250,15,75);
r3.shapeColor="white";

var r4=createSprite(200,350,15,75);
r4.shapeColor="white";

var e1=createSprite(25,300,20,20);
e1.shapeColor="red";

var e2=createSprite(250,25,20,20);
e2.shapeColor="red";

var e3=createSprite(25,100,20,20);
e3.shapeColor="red";

var e4=createSprite(150,25,20,20);
e4.shapeColor="red";

var e5=createSprite(375,200,20,20);
e5.shapeColor="red";

//playing sound in the background of the game
//playSound("assets/category_loops/misguided_rabbit_chase_minimal_loop.mp3",true);

//chances left or remaining lives
var lives=5;

//giving speed to the enimies
e1.velocityX=13;
e2.velocityY=13;
e3.velocityX=13;
e4.velocityY=13;
e5.velocityX=-13;

//change text size and colour
fill("white");
textSize(13);

function draw() {
 
 //change background colour 
 background("black");
  
  //display lives left
  text("Lives Left: " + lives,320,30);
  
  //create boundaries of the playground and bouncing off the objects
  createEdgeSprites();
  e1.bounceOff(edges);
  e2.bounceOff(edges);
  e3.bounceOff(edges);
  e4.bounceOff(edges);
  e5.bounceOff(edges);
  
  //controlling shankar with arrow keys
  if(keyDown(LEFT_ARROW)){
    Shankar.x=Shankar.x-2;
  }
  
  if(keyDown(RIGHT_ARROW)){
    Shankar.x=Shankar.x+2;
  }
  
  if(keyDown(UP_ARROW)){
    Shankar.y=Shankar.y-2;
  }
  
  if(keyDown(DOWN_ARROW)){
    Shankar.y=Shankar.y+2;
  }
  
  // when shankar will touch any of the enemy, his position will reset and live will decrease
  if(Shankar.isTouching(e1)||Shankar.isTouching(e2)||Shankar.isTouching(e3)||Shankar.isTouching(e4)||Shankar.isTouching(e5)){
  lives=lives-1;
  Shankar.x=385;
  Shankar.y=370;
  }
  
  //when lives left is 0 then game over and display the text game over
  if(lives===0){
    reset();
    text("Game Over",170,200);
  }
  
  //draw the objects
  drawSprites();
  
}

// create the function reset
function reset(){
  e1.x=25;
  e1.y=300;
  e2.x=250;
  e2.y=25;
  e3.x=25;
  e3.y=100;
  e4.x=150;
  e4.y=25;
  e5.x=375;
  e5.y=200;
 e1.velocityX=0;
e2.velocityY=0;
e3.velocityX=0;
e4.velocityY=0;
e5.velocityX=0;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
