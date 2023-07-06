canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var greencar_width = 75;
var greencar_height = 100;

var background_image1 = "parkingLot.jpg";
var greencar_image1 = "car2.png";

var greencar_x = 5;
var greencar_y = 300;

function add() {
	background_image = new Image();
	background_image.onload =uploadBackground;
	background_image.src =background_image1;

	greencar_image = new Image();
	greencar_image.onload =uploadgreencar;
	greencar_image.src =greencar_image1;
}

function uploadBackground() {
	ctx.drawImage(background_image,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
    if(keyPress=="40"){
        down();
        console.log("Down Arrow Pressed");
    }
    if(keyPress=="38"){
        up();
        console.log("Up Arrow Pressed");
    }
    if(keyPress=="37"){
        left();
        console.log("Left Arrow Pressed");
    }
    if(keyPress=="39"){
        right();
        console.log("Right Arrow Pressed");
    }

}

function up()
{
	if(greencar_y >=100){
		greencar_y=greencar_y-10;
		uploadBackground()
		uploadgreencar()
		console.log("x position = " + greencar_x + " and y position = " + greencar_y);
	}
}

function down()
{
	if(greencar_y <=400){
		greencar_y=greencar_y+10;
		uploadBackground()
		uploadgreencar()
		console.log("x position = " + greencar_x + " and y position = " + greencar_y);
	}
}

function left()
{
	if(greencar_x >=10){
		greencar_x=greencar_x-10;
		uploadBackground()
		uploadgreencar()
		console.log("x position = " + greencar_x + " and y position = " + greencar_y);
	}
}

function right()
{
	if(greencar_x <=725){
		greencar_x=greencar_x+10;
		uploadBackground()
		uploadgreencar()
		console.log("x position = " + greencar_x + " and y position = " + greencar_y);
	}
}
