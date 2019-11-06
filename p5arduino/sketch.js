var serial;
var portName = "COM6";
var sensorValue;
var a = 1

function preload() {
}


function setup() {
	createCanvas(640, 360);
	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open("COM6");
}

function draw() {
	background(245);
	
	var a = map(sensorValue, 0, 1023, height, 0);
	fill('gold');
	noStroke();
	ellipse(width/2, a, 100);

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
	var currentString = serial.readLine(); // read the incoming string
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
}