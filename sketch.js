var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function readFoodStock(data){

   milkbottle= data.val();
  console.log(milkbottle);
}

//function to update food stock and last fed time
function updateFoodStock(milkbottle)
{
    dataBase.ref('balloon/addmilk').set({
        'milkBottle' : milkbottle + addmilk,
    })
}


//function to add food in stock
button.mousePressed()
  function addBottle()
  {
      milkbottle++;
      food.update(milkBottle);
      food.updateCount();
  }
