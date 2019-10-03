/*
	Meme
	By Leping Jiang
	10/3/19
*/

var oa

function preload(){
	oa = loadImage(oa.jpg);
}


function setup() {
	var canvas = createCanvas(640, 360);
	canvas.drawingContext.miterLimit = 2; // fix for stroke edges

}

function draw() {
	background("white");
	
	image(oa, 0, 0);
	
	textAlign(LEFT, BOTTOM);
	strokeWeight(0);
	textSize(20);
	text("MMP210", 100, 100);
	
	
	stroke("lightblue");
	strokeWeight(5);
	textStyle(ITALIC);
	textSize(100);
	text("hello world", 100, 200);
	
	
	textSize(10);
	text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse earum quod exercitationem vero, temporibus veritatis in ea voluptates dolore doloremque amet sint, doloribus blanditiis maiores enim qui fuga. Adipisci, quaerat?", 100, 250, 500);
	
	

}
