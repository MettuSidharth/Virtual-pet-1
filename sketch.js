var database
var dog,happyDog,sadDog,database,foodS,foodStock
function preload(){
  happyDog = loadImage("images/dogImg1.png")
  sadDog = loadImage("images/dogImg.png")
}

function setup(){
database = firebase.database()
var canvas = createCanvas(500,500)
dog = createSprite(250,200,30,40)
dog.addImage(sadDog)
dog.scale =0.3

foodStock=database.ref("food")
foodStock.on("value",readStock)
}
function draw(){
  background(46,139,87)

  drawSprites()
  textSize(15)
  fill()
  text("food : "+foodS,200,300)
  textColour(white)
  textSize("100")

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }


}

function readStock(data){
  foodS = data.val()
  console.log(foodS)

function writeStock(x){

  if(x<=0){
    x = 0;
    } else{
      x=x-1;
    }
  

  database.ref("/").update({
    Food : x
  })


}


}
