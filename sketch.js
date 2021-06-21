  var coin,bomb,energy_drink,things1,things2,things3,things5;
  var path,power,paths;
var runner1,runner2,player;
var invisibleGround,invisibleGround2 ;
  function preload(){
    //pre-load images
    things1 = loadAnimation("bomb.png");
    things2 = loadAnimation("coin.png");
    things3 = loadAnimation("energyDrink.png");
    player= loadAnimation("Runner-1.png","Runner-2.png");
    things5 = loadAnimation("power.png");

    paths = loadImage("path.png");

  }

  function setup(){
    createCanvas(400,400);
    //create sprites here
  path = createSprite(200,200);
  path.addImage("path.png",paths);
  path.scale = 1.2;
  path.velocityY = 4;

  coin = createSprite(320,200);
  coin.addAnimation("coin.png",things2);
  coin.scale = 0.35

  bomb = createSprite(100,300);
  bomb.addAnimation("bomb.png",things1);
  bomb.scale = 0.10;

  energy_drink = createSprite(200,100);
  energy_drink.addAnimation("energyDrink.png",things3);
  energy_drink.scale = 0.10;


  player= createSprite(200,300);
  player.addAnimation("Runner-1.png","Runner-2.png",player);
  player.scale = 0.10;

  power = createSprite(100,50);
  power.addAnimation("power.png",things5);
  power.scale = 0.10;

  invisibleGround = createSprite(10,200,10,400);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(395,200,10,400);
  invisibleGround2.visible = false;
  }

  function draw() {
    background(0);

    if(path.y > 400){
      path.y = height/2;
    }
      player.x = mouseX
      player.collide(invisibleGround2);
      player.collide(invisibleGround);
      


      player.velocityY = -2;
drawSprites();
  }
  