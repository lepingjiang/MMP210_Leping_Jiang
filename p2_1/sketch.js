/*
	Meme V2
	By Leping Jiang
	10/10/19
*/

var fanCase
var x = 10 //X location
var y = 50 //Y location
var imgWidth = 640 //imgage wdith
var imgHeight = 360 //image height
var textWidth = 600 //text width


function preload() {
	zipTie = loadImage("20191014_205617.jpg");
	tweezer = loadImage("20191014_205644.jpg");
	/*fanCase = loadImage("6089b779763a5ed0aea1ddb91977856f.jpg");*/
}


function setup() {
	var canvas = createCanvas(640, 360);
	canvas.drawingContext.miterLimit = 2; // fix for stroke edges

}

function draw() {
	background("#ddd");

		fill("#f95");// title page and title
	stroke("#44f");
	strokeWeight(4);
	textStyle(NORMAL);
	textSize(60);
	textAlign(CENTER);
	text("Zip Tie and Tweezer", x + 110, y + 30, 400);
	
	fill("#777");// area indecater
	stroke("#44f");
	strokeWeight(0);
	textStyle(NORMAL);
	textSize(20);
	text("area 1", x - 100, y + 30, 400);
	text("area 2", x - 100, y + 230, 400);
	text("area 4", x + 300, y + 30, 400);
	text("area 3", x + 300, y + 230, 400);
	
	fill("#f00");// how to play
	stroke("#44f");
	strokeWeight(0);
	textStyle(NORMAL);
	textSize(20);
	text("Press any key and move the mouse around in different area.", x + 100, y + 200, 400);
	
		if (keyIsPressed) {
		if (mouseX < 320 && mouseY < 180) {
			image(zipTie, x - 10, y - 50, imgWidth, imgHeight * 1.1);
			textAlign(BASELINE, BASELINE);
			textSize(40);
			strokeWeight(0);
			fill("#55f");
			textStyle(ITALIC);
			text("Is this a zip tie?", x + 240, y, textWidth);
		} else if (mouseX < 320 && mouseY > 180) {
			image(tweezer, x - 10, y - 50, imgWidth, imgHeight * 1.1);
			textAlign(BASELINE, BASELINE);
			textSize(40);
			strokeWeight(0);
			fill("#f55");
			text("Is this a tweezer?", x + 240, y, textWidth);
		} else if (mouseX > 320 && mouseY > 180) {
			textAlign(BASELINE, BASELINE);
			fill("#99f");
			background("#ddd");
			stroke("#44f");
			strokeWeight(2);
			textSize(70);
			textStyle(NORMAL);
			text("One thing I know is.......", x + 260, y + 60, 500);
		} else if (mouseX > 320 && mouseY < 180) {
			textAlign(BASELINE, BASELINE);
			fill("#f99");
			stroke("#f44");
			strokeWeight(2);
			textSize(70);
			textStyle(NORMAL);
			strokeWeight(2);
			image(zipTie, x - 10, y - 50, imgWidth, imgHeight * 1.1);
			text("this is a tweezer!", x + 340, y, textWidth);
		}
	}
	



	/*image(fanCase, x-10, y-50, imgWidth, imgHeight);
	
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
	
	
	triangle(320, 180, 150, 180, 170, 230);

	
	triangle(320, 180, 150, 180, 170, 230);*/
}
