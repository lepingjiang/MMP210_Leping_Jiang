/*
	function
	By Leping Jiang
	11/21/19
*/



function preload() {}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(150);
	
	
	button(200, 200, 100, 'red');
	button(300, 300, 100, 'blue');
}

function button(x, y, s, c) {
	var d = dist(x, y, mouseX, mouseY);

	if (d < s / 2) {
		fill(c);
	} else {
		fill('plum');
	}
	ellipse(x, y, s);
}
