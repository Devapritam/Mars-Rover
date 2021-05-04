canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_images = ["nasa_img_1.jpg", "nasa_img_2.jpg", "nasa_img_3.jpg", "nasa_img_4.jpg"];

rand_num = Math.floor(Math.random() * 4);
console.log(rand_num);

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = nasa_images[rand_num];
rover_image = "rover.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyevent = e.keyCode;
    console.log(keyevent);
    if(keyevent == '38'){
        up();
        console.log("up");
    }
    if(keyevent == '40'){
        down();
        console.log("down");
    }
    if(keyevent == '37'){
        left();
        console.log("left");
    }
    if(keyevent == '39'){
        right();
        console.log("right");
    }
}

function up() {
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log(rover_x, rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down() {
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log(rover_x, rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left() {
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log(rover_x, rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right() {
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log(rover_x, rover_y);
        uploadbackground();
        uploadrover();
    }
}