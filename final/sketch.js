/*
	p5 and Arduino
*/

var serial;
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
var iop = 50;//image opacity
var iops = 5;//image opacity change

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
	console.log('the serial port opened.')
}

function portClose() {
	console.log('The serial port closed.');
}

function serialError() {
	console.log("error");
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
	}
	
	iop += iops;
	
	if (iop > 200 || iop < 0) {
		iops *= -1;
	}
	

}

function mousePressed(){

}


























