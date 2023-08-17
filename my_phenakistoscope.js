const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 247, 203, 211);  //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(circles);
  layer1.mode(RING);
  layer1.set_boundary( 0, 800 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

}

function circles(x, y, animation, pScope){
  //translate(50 * animation.frame, 0);
  //scale(animation.frame*2);
  fill(162, 232, 211)
  
  let ballSize  = 50 + (animation.wave(1)* 20)
  let bounce = 100* animation.wave()
  ellipse(0, 600+bounce ,ballSize); 
  ellipse(100, 600-bounce ,ballSize); 

}
  
  function squares(x, y, animation, pScope){

    // this is how you set up a background for a specific layer
    let angleOffset = (360 / SLICE_COUNT) / 2
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;
  
    fill(219, 103, 124)
    arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  
    fill(162, 232, 211)
    ellipse(-10,-200-animation.wave()*50,50,50) // .wave is a cosine wave btw
  
  }

