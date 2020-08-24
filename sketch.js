//Create variables here
var dog , happyDog , database , foodS , foodStock ,dogImage; 

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  createCanvas(500, 500);
  dog.addImage("dog",dogImage);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog1",happyDog);
  }

  drawSprites();
  //add styles here
  textSize(25);
  fill("white");
  text("Note:Press UP_ARROW Key TO Feed Jimmy Milk");
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x - 1;
  }
  database.ref('/').update({Food : x})
}