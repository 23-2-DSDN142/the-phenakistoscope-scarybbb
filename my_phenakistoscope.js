const SLICE_COUNT = 8;

function setup_pScope(pScope){
  pScope.output_mode(STATIC_DISK);
  pScope.output_mode(ANIMATED_DISK);
  
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 255);  //lets us draw the whole circle background, ignoring the boundaries

  var backG = new PLayer(circles);
  backG.mode(RING);
  backG.set_boundary( 0, 800 );

  var between = new PLayer(divider);
  between.mode( RING );
  between.set_boundary( 400, 1000 );

  var ball = new PLayer(squares);
  ball.mode( RING );
  ball.set_boundary( 0, 400 );
  
  var bunnies = new PLayer(circles);
  bunnies.mode(RING);
  bunnies.set_boundary( 0, 800 );
     
  }
function divider(x, y, animation, pScope){
  rectMode(CORNER);
  noStroke()
  rotate((360 / SLICE_COUNT)/2)
  
  fill(217, 28, 59)
  triangle(0,1000 ,400,1000 ,0,0) /// maybe this is best suited being a triange? So the width stays relitive 

}

function circles(x, y, animation, pScope){
  //translate(50 * animation.frame, 0);
  //scale(animation.frame*2);
  fill(162, 232, 211)
  


}

  
  function squares(x, y, animation, pScope){

    // this is how you set up a background for a specific layer
    let angleOffset = (360 / SLICE_COUNT) / 2
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;
    console.log(int(animation.frame)%2)
    
    fill(255, 245, 207)
    arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); //ball yellow

  if(int(animation.frame*8)% 2 ){ // this takes the number that goes between 0 and 1, and makes it between 0 and 8. Then it checks to see if its devisable by 2, and only fills pink if its an even number. (ball pink)
    fill(255, 138, 189)
    arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  }
    
    

   
  
  }


