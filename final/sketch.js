/*
	p5 and Arduino
*/

var serial;
var portName = "COM8";
var sensorValue;

function setup() {
	createCanvas(640, 360);

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
	background(252);
	console.log(sensorValue);
	
	rect()
}