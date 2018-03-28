/*CALUGA QUIERE NUGGETS
por Alexandra Hyland
Proyecto Final p5.js Escuela CODED
25 03 2018
Visualización de funciones matemáticas con perritos y nuggets.
*/
var caluga
var intro
var boton
var botonug
var rand
var nuggets
var nug
var font
var fontt
var x = 100

function preload(){
  caluga = loadImage('./assets/calugaa.png');
  nug = loadImage('./assets/fotos/nug1.png');
  font = loadFont('./assets/fonts/spring.otf');
  fontt = loadFont('./assets/fonts/arial.ttf');
}

function setup(){
  createCanvas(600, 600);
    boton = createButton('RANDOM!');
  boton.position(100, 550);
  boton.mouseClicked(rand);
    botonug = createButton('NUGGETS!');
  botonug.position(300, 550);
  botonug.mouseClicked(nuggets);
}

function draw(){
  background(255, 209, 220,100);
  intro = 'Ayuda al perrito a hacer ejercicio recorriendo funciones matemáticas, para que pueda comer nuggets con tranquilidad.'
  textAlign(LEFT);
  textFont (font);
  textSize(30);
  text (intro, 30, 30, 600, 200);
  imageMode(CENTER);
     drawSprites();
  //grilla
  line(250,150,250,450);
  line(100,height/2,400,height/2);
for (var i = 0; i<5; i++){
  line(100*i,height/2+10,100*i,height/2-10);
for (var j = 0; j<5; j++){
  line(240,150*j,260,150*j);
  }
}
//coseno();
}

function rand(){
var tacita = int(random (1,4));
console.log(tacita);
if (tacita <2){
  coseno();
}
else if (tacita  >=2){
  quieto();
}
else if (tacita >=4){
  mouse();
}
}

function coseno(){
   push();
   textFont(fontt);
   textSize(20);
   text('y=sen(x), y=cos(x)', 280, 170);
   image(caluga,x,height/2+100*sin((PI/40)*x));
   x = x+1
   if (x==430){
     x = 100
     pop();
     //tambien tiene que ir una elipse que muestre literalmente la funcion.
   }
 }

 function quieto(){
 image(caluga, 100, 100);
 }

 function mouse(){
 image(caluga, mouseX, mouseY);
 }

function nuggets(){
   background (255, 209, 220)
   image(caluga,width/2, height/2, 200,200);
    drawSprites();
     function mousePressed(){
     //lluvia de nuggets
     var s = createSprite(mouseX, mouseY, 30, 30);
     //sprite.addImage(nug)
    s.velocity.x = random(-5, 5);
    s.velocity.y = random(-5, 5);
   }
}
