function setup() {
	createCanvas(500, 600);
}

function draw() {
	background(240);

	rectMode(CENTER);
	fill("white");
	strokeWeight(1)
	ellipse(250, 300, 400, 450); //base
	ellipse(170, 270, 80, 55);
	ellipse(330, 270, 80, 55);
	

	fill(100, 100, 100); //eyes
	circle(170, 270, 50);
	circle(330, 270, 50);
	circle(170, 270, 20);
	circle(330, 270, 20);

	fill(230, 230, 230, 100); //glasses
	strokeWeight(10);
	rect(170, 270, 120, 80);
	rect(330, 270, 120, 80);

	rect(250, 270, 40, 10);

	line(110, 270, 55, 280);
	
	line(390, 270, 445, 280);
	
	line(250, 450, 200, 420);//mouse
	line(250, 450, 300, 420);
	
	fill("black")
	triangle(150, 90, 160, 110, 40, 300);//hair
	triangle(140, 90, 150, 110, 45, 245);
	triangle(130, 85, 200, 70, 10, 300);
	triangle(160, 70, 200, 70, 70, 350);
	triangle(180, 67, 220, 66, 150, 200);
	triangle(215, 65, 250, 63, 190, 180);
	triangle(245, 62, 280, 58, 230, 170);
	triangle(275, 58, 310, 58, 270, 160);
	triangle(305, 58, 350, 58, 310, 150);
	triangle(305, 58, 350, 58, 310, 150);
	triangle(350, 90, 340, 110, 460, 300);
	triangle(360, 90, 350, 110, 455, 245);
	triangle(370, 85, 300, 70, 490, 300);
	triangle(340, 70, 300, 70, 430, 350);
}
