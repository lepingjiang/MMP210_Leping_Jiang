/*
	Meme
	By Leping Jiang
	10/3/19
*/

var fanCase
var x = 10;//X location
var y = 50;//Y location
var imgWidth = 640;//imgage wdith
var imgHeight = 360;//image height
var textWidth = 600;//text width


function preload(){
	fanCase = loadImage("6089b779763a5ed0aea1ddb91977856f.jpg");
}


function setup() {
	var canvas = createCanvas(640, 360);
	canvas.drawingContext.miterLimit = 2; // fix for stroke edges

}

function draw() {
	background("white");
	
	image(fanCase, x-10, y-50, imgWidth, imgHeight);
	
	textAlign(LEFT, BOTTOM);
	strokeWeight(3);
	textSize(30);
	text("FirstTime builder ask:", x, y, textWidth);
	
	
	stroke("#ffaaaa");
	strokeWeight(5);
	textStyle(ITALIC);
	textSize(30);
	text("How many fan am I going to need for my PC?", x, y+40, textWidth);
	
	strokeWeight(3);
	textSize(30);
	text("Expert answer:", x, y+240, textWidth);
	
	strokeWeight(5);
	textSize(30);
	text("You need a case that is made out of fans.", x, y+280, textWidth);
	
	/*triangle(320, 180, 150, 180, 170, 230);

	
	triangle(320, 180, 150, 180, 170, 230);*/
}
