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
var system
var font
var fontt
var system
var x = 100
var estado = 1; //estado = 1: wuieto, estado = 2: cpseno, estado = 3: mouse, estado = 4: nuggets

function preload(){
  caluga = loadImage('./assets/calugaa.png');
  nug = loadImage('./assets/fotos/nug1.png');
  font = loadFont('./assets/fonts/spring.otf');
  fontt = loadFont('./assets/fonts/arial.ttf');
  }

function setup(){
  createCanvas(600, 600);
  system = new ParticleSystem(createVector(250, 20));
    boton = createButton('RANDOM!');
  boton.position(100, 550);
  boton.mouseClicked(rand);
    botonug = createButton('NUGGETS!');
  botonug.position(300, 550);
  botonug.mouseClicked(nuggets);
  }

function draw(){
  background(255, 209, 220,100);
  intro = 'Ayuda al perrito a hacer ejercicio recorriendo funciones matematicas, para que pueda comer nuggets con tranquilidad.'
  textAlign(LEFT);
  textFont (font);
  textSize(30);
  text (intro, 30, 30, 600, 200);
  imageMode(CENTER);
          //grilla
  line(250,150,250,450);
  line(100,height/2,400,height/2);
for (var i = 0; i<5; i++){
  line(100*i,height/2+10,100*i,height/2-10);
for (var j = 0; j<5; j++){
  line(240,150*j,260,150*j);
  }
  //estado
  if (estado == 1) {
    quieto();
  }
  else if (estado == 2) {
    coseno();
  }
  else if (estado == 3) {
    cuadratica();
  }
  else if (estado == 4) {
    nuggets();
    system.addParticle();
    system.run();
  }
}
}

function rand(){
var tacita = int(random (1,6));
console.log(tacita);
if (tacita <2){
  // coseno();
  estado = 2;
}
else if (tacita  >=2 && tacita < 4){
  // quieto();
  estado = 1;
}
else if (tacita >=4){
  // mouse();
  estado = 3;
}
}

function coseno(){
   textFont(fontt);
   textSize(20);
   text('y=sen(x), y=cos(x)', 280, 170);
   image(caluga,x,height/2+100*sin((PI/40)*x));
   x = x+1
   if (x==430){
     x = 100
       //tambien tiene que ir una elipse que muestre literalmente la funcion.
   }
 }

 function quieto(){
 image(caluga, 470, 90);
 }

 function cuadratica(){
   textFont(fontt);
   textSize(20);
   text('f(x)= ax2+bx+c', 280, 170);
   image(caluga,x,170+100*x);//ACA PONER OTRA FUNCION
   x = x+1
   if (x==430){
     x = 100
}
  }

 function nuggets(){
     background (255, 209, 220);
     image(caluga,mouseX, mouseY, 600, 600);
      estado = 4;
  }

  var Particle = function(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-2, 2), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255.0;
  };

  Particle.prototype.run = function() {
    this.update();
    this.display();
  };

  Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };

  Particle.prototype.display = function() {
    image(nug, this.position.x, this.position.y,70,70);
  };

  Particle.prototype.isDead = function(){
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };

  var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
  };

  ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
  };

  ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
