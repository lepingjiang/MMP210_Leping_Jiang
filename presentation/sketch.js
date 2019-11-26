/*
	Final project Presentation
	By Leping Jiang
	11/19/19
	sensor
	interaction
	theme
*/


var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 550;
var nextBtnY = 360;
var nextBtnSize = 50;

var prevBtnX = 30;
var prevBtnY = 335;
var prevBtnW = 100;
var prevBtnH = 40;

var candle

function preload() {
	
	candle = loadImage("candle-4564139_960_720.jpg");
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(250);

	if (slideNumber == 0) {
		// content for slide number 0
		fill(0);
		textSize(50);
		textAlign(CENTER, CENTER);
		text("Final Project Pitch", width / 2, height / 2 -50);

		textSize(30);
		text("by Leping Jiang", width / 2, height / 2);

	} else if (slideNumber == 1) {
		// content for slide number 1

		fill(1);
		textSize(40);
		textAlign(CENTER, CENTER);
		text("DHT Humidity sensor", width / 2, 50);
		
		textSize(20);
		text("Use sensor to control the fire of the candle", width / 2 - 100, 300, 200, 50);

	} else if (slideNumber == 2) {

		// theme
		image(candle, 60, 50, 480, 320);
		
		fill(255);
		textSize(30);
		text("Theme", width / 2 - 50, height / 2 - 150);
	}


	/* drawing buttons */

	// next btn
	if (slideNumber < totalSlides - 1) {
		fill(200);
		noStroke();
		ellipse(nextBtnX, nextBtnY, nextBtnSize);
		fill(0);
		textSize(20);
		textAlign(CENTER, CENTER);
		text("Next", nextBtnX, nextBtnY);
	}


	// prev btn
	if (slideNumber > 0) {
		fill(200);
		noStroke();
		rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
		fill(0);
		textSize(20);
		textAlign(LEFT, TOP);
		text("Previous", prevBtnX + 10, prevBtnY + 10);
	}


}

function mousePressed() {

	// next btn
	var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
	if (d < nextBtnSize / 2 && slideNumber < totalSlides - 1) {
		slideNumber++;
	}

	// prev btn
	if (mouseX > prevBtnX &&
		mouseX < prevBtnX + prevBtnW &&
		mouseY > prevBtnY &&
		mouseY < prevBtnY + prevBtnH &&
		slideNumber > 0) {
		slideNumber--;
	}
}
