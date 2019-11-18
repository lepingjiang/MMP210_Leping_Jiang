/*
	self portrait with variables and interaction
	By Leping Jiang
	9/24/19
*/

var x = 250; //loction
var y = 300; //loction
var rightEyeX = 320; //right eye x location
var leftEyeX = 160; //left eye x location
var eyeY = 260; //eyes y location
var faceSizeWidth = 400; //face size width
var faceSizeHeight = 450; //face size height
var eyeSizeWidth = 40; //eye szie width
var eyeSizeHieght = 50; //eye szie height
var glassesSizeWidth = 40; //eye szie width
var glassesSizeHieght = 50; //eye szie height
var innerEyeStroke = 0; //inner eye stroke
var mouthMovementY = 30; //y location of mouth movement



function setup() {
	createCanvas(500, 600);
	frameRate(60);
}

function draw() {
	background(240);

	var eyeMovementX = map(mouseX, 0, width, 0, 20);
	var eyeMovementY = map(mouseY, 0, height, 0, 20);
	
		/*if (keyIsPressed) { 
		mouthMovementY(-20);
	} else {
		mouthMovementY(30);
	}*/
	
		if (mouseIsPressed) {
		eyeSizeHieght = 1;
		eyeMovementX = 10;
		eyeMovementY = 10;
		mouthMovementY = 0;
		innerEyeStroke = 1;
	} else {
		eyeSizeHieght = 50;
		mouthMovementY = 30;
		innerEyeStroke = 0;
	}

	//var x = mouseX;
	//var y = mouseY;

	rectMode(CENTER);
	fill("white");
	strokeWeight(1);
	ellipse(x, y, faceSizeWidth, faceSizeHeight); //face

	strokeWeight(innerEyeStroke)
	ellipse(x - 90 + eyeMovementX, y - 40 + eyeMovementY, eyeSizeWidth * 2, eyeSizeHieght * 1.2); //inner eye
	ellipse(x + 70 + eyeMovementX, y - 40 + eyeMovementY, eyeSizeWidth * 2, eyeSizeHieght * 1.2);


	strokeWeight(1)
	fill(100, 100, 100); //eyes
	ellipse(leftEyeX + eyeMovementX, eyeY + eyeMovementY, eyeSizeWidth * 1.25, eyeSizeHieght);
	ellipse(rightEyeX + eyeMovementX, eyeY + eyeMovementY, eyeSizeWidth * 1.25, eyeSizeHieght);
	ellipse(leftEyeX + eyeMovementX, eyeY + eyeMovementY, eyeSizeWidth / 2, eyeSizeHieght / 5 * 2);
	ellipse(rightEyeX + eyeMovementX, eyeY + eyeMovementY, eyeSizeWidth / 2, eyeSizeHieght / 5 * 2);

	fill(230, 230, 230, 100); //glasses
	strokeWeight(10);
	rect(x - 80, y - 30, glassesSizeWidth * 3, glassesSizeHieght * 1.5);
	rect(x + 80, y - 30, glassesSizeWidth * 3, glassesSizeHieght * 1.5);

	rect(x, y - 30, glassesSizeWidth, glassesSizeHieght * 0.2); //glasses nose

	line(x - 140, y - 30, x - 195, y - 20); //glasses side support
	line(x + 140, y - 30, x + 195, y - 20);

	line(x, y + 120 + mouthMovementY, x - 50, y + 120); //mouth
	line(x, y + 120 + mouthMovementY, x + 50, y + 120);

	fill("black"); //hair
	triangle(x - 100, y - 210, x - 90, y - 190, x - 210, y);
	triangle(x - 110, y - 210, x - 100, y - 190, x - 205, y - 55);
	triangle(x - 120, y - 215, x - 50, y - 230, x - 240, y);
	triangle(x - 90, y - 230, x - 50, y - 230, x - 180, y + 50);
	triangle(x - 70, y - 233, x - 30, y - 234, x - 100, y - 100);
	triangle(x - 35, y - 235, x, y - 237, x - 60, y - 120);
	triangle(x - 35, y - 238, x + 30, y - 242, x - 20, y - 130);
	triangle(x + 25, y - 242, x + 60, y - 242, x + 20, y - 140);
	triangle(x + 55, y - 242, x + 100, y - 242, x + 60, y - 150);
	triangle(x + 100, y - 210, x + 90, y - 190, x + 210, y);
	triangle(x + 110, y - 210, x + 100, y - 190, x + 205, y - 55);
	triangle(x + 120, y - 215, x + 50, y - 230, x + 240, y);
	triangle(x + 90, y - 230, x + 50, y - 230, x + 180, y + 50);




/*	if (keyIsPressed) { 
		eyeSizeHieght = 1;
		mouthMovementY = 0;
		innerEyeStroke = 1;
	} else {
		eyeSizeHieght = 50;
		mouthMovementY = 30;
		innerEyeStroke = 0;
	}*/
}
