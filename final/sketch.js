/*
	p5 and Arduino
*/

var serial;
var serialAvailable;
var portName = "COM8";
var sensorValue = 51;
var candle;//candle imgae
var firea;//fire image type one
var fireb;//fire image type two
var lx = 140;//location x
var ly = 140;//location y
var iw = 60;//image width
var ih = 150;//image hight
var ib = 255;//image brightness
var iop = 170;//image opacity
var iops = 2;//image opacity change
/*var iop2 = 120;//image opacity 2
var iops2 = 2;//image opacity change 2
var iop3= 80;//image opacity 2
var iops3 = 1.5;//image opacity change 2*/



function preload() {
	candle = loadImage("asset1.png");
	firea = loadImage("asset2.png");
	fireb = loadImage("asset3.png");
}

function setup() {
	createCanvas(480, 360);

	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);

	serial.open(portName);
	
}

function serverConnected() {
	console.log('connected to server.');
}

function portOpen() {
	console.log('the serial port opened.');
	serialAvailable = true;
}

function portClose() {
	console.log('The serial port closed.');
	serialAvailable = false;
}

function serialError() {
	console.log("error");
	serialAvailable = false;
}

function serialEvent() {
	var currentString = serial.readLine();
	trim(currentString);
	if (!currentString) {
		return;
	}
	sensorValue = currentString;
}

function draw(){
	background(10);
	console.log(sensorValue);
	
	
	tint(255, 255);
	image(candle, lx, ly);
	//image(firea, 220, 20, 60, 150);
	if (sensorValue < 50 && mouseIsPressed){
		tint(ib, iop);
		image(firea, lx+90, ly-120, iw, ih);
	}
	
	if (keyIsPressed && mouseIsPressed){
		tint(ib, iop);
		image(firea, lx+90, ly-120, iw, ih);
		//tint(ib, iop2);
		//image(fireb, lx+85, ly-80, iw*0.2, ih*0.2);
		//image(fireb, lx+140, ly-120, iw*0.2, ih*0.2);
		//flashing(lx+85, ly-80, iw*0.2, ih*0.2);
	}
	
	iop += iops;
	if (iop > 255 || iop < 170) {
		iops *= -1;
	}

/*	iop2 += iops2;
	if (iop2 > 240 || iop2 < 120) {
		iops2 *= -1;
	}

	iop3 += iops;
	if (iop > 255 || iop < 170) {
		iops *= -1;
	}*/
	
	
	var iop2 = 100;//image base opacity
	var iops2 = 1;//image opacity changer
	
	tint(ib, iop2);
	image(fireb, lx+140, ly-120, iw*0.2, ih*0.2);
	
	iop2 += iops2;
	
	if (iop2 > 255 || iop2 < 100) {
		iops2 *= -1;
	}
}

function mousePressed(){

}

/*function flashing(x, y, w, h, a){
	var iop2 = 100;//image base opacity
	var iops2 = 1;//image opacity changer
	
	tint(ib, iop2);
	image(fireb, x, y, w, h);
	
	iop2 += iops2;
	
	if (iop2 > 255 || iop2 < 100) {
		iops2 *= -1;
	}
}*/

























