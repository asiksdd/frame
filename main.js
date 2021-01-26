function setup(){
    canvas = createCanvas(640 , 480);
    canvas.position(150 , 150);
    video = createCapture(VIDEO);
    video.hide();


}

function draw(){

    image(video , 230, 150 , 220 ,200 );

    fill(123 , 0 , 95);
    stroke(123 , 0 , 95);
    circle(50 , 50 , 80);

    fill(0 , 43 , 95);
    stroke(0 , 43 , 95);
    rect(90 , 40 , 460 , 20);

    fill(123 , 0 , 95);
    stroke(123 , 0 , 95);
    circle(560 , 50 , 80);

    fill(0 , 43 , 95);
    stroke(0 , 43 , 95);
    rect(40 , 90 , 20 , 350);

    fill(123 , 0 , 95);
    stroke(123 , 0 , 95);
    circle(50 , 430 , 80);

    fill(0 , 43 , 95);
    stroke(0 , 43 , 95);
    rect(550 , 90 , 20 , 300);

    fill(123 , 0 , 95);
    stroke(123 , 0 , 95);
    circle(560 , 430  , 80);

    fill(0 , 43 , 95);
    stroke(0 , 43 , 95);
    rect(89 , 420 , 430 , 20);
    
}

function take_snapshot(){

    save("myselfie.png");
}
