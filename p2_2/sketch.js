/*
	Meme V3
	By Leping Jiang
	10/17/19
*/

var x = 10;
var y = 10;
var w = 30;
var speed = 5;
var speed2 = 5;
var spin = 0;
var tx = 500;//translate position x
var ty = 200;//translate position y
var px = 220;//x position of" ! "
var py = 190;//y position of" ! "


function preload() {

}


function setup() {
	var canvas = createCanvas(640, 360);
	canvas.drawingContext.miterLimit = 2; // fix for stroke edges

}

function draw() {
	background(245);
	
	textSize(50);
	text('We got fan SPIN', 30, 110, 300);
	
	textSize(80);
	text('!', px, py, 300);
	px += random(-2, 2);
	py += random(-2, 2);
	
	strokeWeight(0); //bar that bounce around
	fill(255);
	rect(x, y, w, 10);
	rect(x, y+330, w, 10);
	w += speed;
	x += speed2;
	
	
	stroke(120);//fan frame
	strokeWeight(10);
	circle(tx, ty, 200);
	fill('rgba(255, 255, 255, 0)');
	rect(tx-100, ty-100, 200, 200, 5, 5, 5, 5);
	circle(tx-85, ty-85, 20);
	circle(tx+85, ty+85, 20);
	circle(tx+85, ty-85, 20);
	circle(tx-85, ty+85, 20);
	
	
	fill(120);//fan blade
	strokeWeight(0);
	translate(tx, ty);
	rotate(spin);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	rotate(8);
	rect(0, 0, 100, 10);
	spin += 0.5;
	

	

	
	if (w > 620 || w < 20) {
		speed *= -1;
	}
	
	if (x < -40 || x > 600){
		speed2 *= -1;
	}

	
}