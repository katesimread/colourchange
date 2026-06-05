let nightTime = false;

function setup (){
createCanvas (500,500);
}

function draw (){
    if(nightTime){
        //day mode
background(255,0,0);
    }else{
        //night mode
background(0);
    }
}

function mousePressed() {
  nightTime = !nightTime
}