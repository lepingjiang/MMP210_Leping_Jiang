/*
	self portrait with variables
	By Leping Jiang
	9/17/19
*/

var x = 250;//loction
var y = 300;//loction
var faceSizeWidth = 400;//face size width
var faceSizeHeight = 450;//face size height
var eyeSizeWidth =40;//eye szie width
var eyeSizeHieght =50;//eye szie height
var glassesSizeWidth =40;//eye szie width
var glassesSizeHieght =50;//eye szie height

function setup() {
	createCanvas(500, 600);
}

function draw() {
	background(240);

	rectMode(CENTER);
	fill("white");
	strokeWeight(1);
	ellipse(x, y, faceSizeWidth, faceSizeHeight); //face

	ellipse(x-80, y-30, eyeSizeWidth*2, eyeSizeHieght*1.1);//eye base
	ellipse(x+80, y-30, eyeSizeWidth*2, eyeSizeHieght*1.1);
	

	fill(100, 100, 100); //eyes
	ellipse(x-80, y-30, eyeSizeWidth*1.25, eyeSizeHieght);
	ellipse(x+80, y-30, eyeSizeWidth*1.25, eyeSizeHieght);
	ellipse(x-80, y-30, eyeSizeWidth/2, eyeSizeHieght/5*2);
	ellipse(x+80, y-30, eyeSizeWidth/2, eyeSizeHieght/5*2);

	fill(230, 230, 230, 100); //glasses
	strokeWeight(10);
	rect(x-80, y-30, glassesSizeWidth*3, glassesSizeHieght*1.3);
	rect(x+80, y-30, glassesSizeWidth*3, glassesSizeHieght*1.3);

	rect(x, y-30, glassesSizeWidth, glassesSizeHieght*0.2);//glasses nose

	line(x-140, y-30, x-195, y-20);//glasses side support
	line(x+140, y-30, x+195, y-20);
	
	line(x, y+150, x-50, y+120);//mouse
	line(x, y+150, x+50, y+120);
	
	fill("black");//hair
	triangle(x-100, y-210, x-90, y-190, x-210, y);
	triangle(x-110, y-210, x-100, y-190, x-205, y-55);
	triangle(x-120, y-215, x-50, y-230, x-240, y);
	triangle(x-90, y-230, x-50, y-230, x-180, y+50);
	triangle(x-70, y-233, x-30, y-234, x-100, y-100);
	triangle(x-35, y-235, x, y-237, x-60, y-120);
	triangle(x-35, y-238, x+30, y-242, x-20, y-130);
	triangle(x+25, y-242, x+60, y-242, x+20, y-140);
	triangle(x+55, y-242, x+100, y-242, x+60, y-150);
	triangle(x+100, y-210, x+90, y-190, x+210, y);
	triangle(x+110, y-210, x+100, y-190, x+205, y-55);
	triangle(x+120, y-215, x+50, y-230, x+240, y);
	triangle(x+90, y-230, x+50, y-230, x+180, y+50);
}
