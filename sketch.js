function setup() {
    createCanvas(400, 400);
  }
  
  function inicializaCores(){
    background("pink");
    fill("purple");
    textSize(24);
    textAlign(CENTER,CENTER);
  }
  
  function draw() {
    inicializaCores();
    
    let maximo = width;
    let minimo = 1;
    //mouseX, 0, width ==> 0, palavra.length
    let palavra = "cavalo homossexual das montanhas";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    //console.log(quantidade);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
  }
  