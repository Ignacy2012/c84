canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "mars.jpg";

rover_image = "rover.png";

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

function add(){

    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;

    if(keyPressed == "37"){
        left()
    }

    if(keyPressed == "38"){
        up()
    }

    if(keyPressed == "39"){
        right()
    }

    if(keyPressed == "40"){
        down()
    }
}
