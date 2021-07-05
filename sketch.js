// Varibles junkfood
var knife,mg1
var pizza,mg2
var milkshake,mg3
var icecream,mg4
var cola,mg5 
// Varible goodfood
var salad,mg6
var fruits,mg7
var milk,mg8
var chicken,mg9 
var eggs,mg10
var background,mg11

//Function 
function preload(){
mg1=loadImage("Images/knife.png")
mg2=loadImage("Images/pizza.png")
mg3=loadImage("Images/milkshake.png")
mg4=loadImage("Images/Icecream.png")
mg5=loadImage("Images/cola.png")
mg6=loadImage("Images/salad.png")
mg7=loadImage("Images/Fruits.jpg")
mg8=loadImage("Images/Milk.png")
mg9=loadImage("Images/Chicken.jpg")
mg10=loadImage("Images/egg.jpg")
mg11=loadImage("Images/Bk.jpg")
}


function setup(){
    createCanvas(windowWidth,windowHeight)

    // Addimages

/*pizza.addImage("mg2",mg2);
milkshake.addImage("mg3",mg3);
icecream.addImage("mg4",mg4);
cola.addImage("mg5",mg5);
salad.addImage("mg6",mg6);
fruits.addImage("mg7",mg7);
milk.addImage("mg8",mg8);
chicken.addImage("mg9",mg9);
eggs.addImage("mg10",mg10); */

//Sprites
knife=createSprite(100,100,10,10);
knife.addImage("mg1",mg1);
knife.scale=0.5


}

function draw(){

    background(mg11)
    knife.x=mouseX
    knife.y=mouseY
    food()
    drawSprites();

 }
 function food(){
    if (frameCount % 60 === 0) {
        var junkfood = createSprite(400);
        junkfood.y = Math.round(random(0,height));
        var randNum=Math.round(random(1,4));
        switch(randNum) {
        case 1: junkfood.addImage(mg5);
                break;
        case 2: junkfood.addImage(mg4);
                break;
        case 3: junkfood.addImage(mg3);
                break;
        case 4: junkfood.addImage(mg2);
                break;
        default: break;
      }
        junkfood.scale = 0.5;
        junkfood.velocityX = -3;
        //assign lifetime to the variable
        junkfood.lifetime = 200;

        var healthyfood = createSprite(300);
        healthyfood.y = Math.round(random(0,height));
        var ram=Math.round(random(1,5));
        switch(ram) {
        case 1: healthyfood.addImage(mg6);
                break;
        case 2: healthyfood.addImage(mg7);
                break;
        case 3: healthyfood.addImage(mg8);
                break;
        case 4: healthyfood.addImage(mg9);
                break;
        case 5: healthyfood.addImage(mg10);
                break;
        default: break;
      }
        healthyfood.scale = 0.5;
        healthyfood.velocityX = -3;

        //assign lifetime to the variable
        healthyfood.lifetime = 200;
         
        
        
      
      }
    }
    
    



