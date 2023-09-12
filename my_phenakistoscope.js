const SLICE_COUNT = 8;

function setup_pScope(pScope){
  pScope.output_mode(STATIC_DISK);
 // pScope.output_mode(ANIMATED_DISK);
  
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 229,210,195);  //lets us draw the whole circle background, ignoring the boundaries

  var between = new PLayer(divider);
  between.mode( RING );
  between.set_boundary( 400, 1000 );
  
  var shine = new PLayer(spotlight);
  shine.mode(RING);
  shine.set_boundary( 0, 1000 );

  var party = new PLayer(confetti);
  party.mode(RING);
  party.set_boundary( 400, 1000 );

  var roll = new PLayer(ball);
  roll.mode( RING );
  roll.set_boundary( 0, 1000 );

  //var bunnies = new PLayer(circles);
  //bunnies.mode(RING);
 // bunnies.set_boundary( 0, 600 );


  var film = new PLayer(outsideRing);
  film.mode( RING );
  film.set_boundary( 970, 1000 );  
  }
 
  function outsideRing(x, y, animation, pScope){
    pScope.fill_background(40,31,20,255)//background
    

  }

function divider(x, y, animation, pScope){
  rectMode(CORNER);
  noStroke()
  rotate((360 / SLICE_COUNT)/2)
  
  fill(163,61,61)
  triangle(0,1000 ,400,1000 ,0,0) /// maybe this is best suited being a triange? So the width stays relitive 

}

function confetti(x, y, animation, pScope){
  
  fill(216,198,96)//yellow confetti
  ellipse(10,800-animation.wave()*10,20)
  ellipse(100,600-animation.wave()*10,20)
  ellipse(250,400-animation.wave()*10,20)

  fill(128,170,113)//green confetti
  ellipse(600,300-animation.wave()*10,20)
  ellipse(100,800-animation.wave()*10,20)
  ellipse(400,400-animation.wave()*10,20)

  fill(113,145,170)//blue confetti
  ellipse(400,750-animation.wave()*10,20)
  ellipse(250,550-animation.wave()*10,20)
  ellipse(350,400-animation.wave()*10,20)
  ellipse(600,700-animation.wave()*10,20)

  fill(141,116,158)//purple confetti
  ellipse(100,600-animation.wave()*10,20)
  ellipse(800,100-animation.wave()*10,20)
  ellipse(100,450-animation.wave()*10,20)

  fill(219,167,191)//pink confetti
  ellipse(500,600-animation.wave()*10,20)
  ellipse(600,100-animation.wave()*10,20)
  ellipse(650,400-animation.wave()*10,20)
}
  function spotlight(x, y, animation, pScope){
    fill(265,249,176,150)
    noStroke()
    triangle(200,0 ,400,1500,-200,0)//spotlight

  }
  
  function ball(x, y, animation, pScope){

    let angleOffset = (360 / SLICE_COUNT) / 2
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;
    console.log(int(animation.frame)%2)
    
    fill(226,215,221)
    arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); //ball white

  if(int(animation.frame*8)% 2 ){ // ball pink
    fill(211,184,196)
    arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background 
  }
    
  
  
  }


