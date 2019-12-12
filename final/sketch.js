/*
	MMP210 Final project
	dht humidity sensor
	use humidity value to control fire on the candle
	Leping Jiang
	12/12/2019
	Version 1.1.0.4
*/

var serial;
var serialAvailable;
var portName = "COM4";
var sensorValue = 56;
var candle; //candle imgae
var firea; //fire image type one
var fireb; //fire image type two
var lx = 140; //location x
var ly = 140; //location y
var iw = 60; //image width
var ih = 150; //image hight
var ib = 255; //image brightness
var tv = 255; //tint value
var iop = 170; //image opacity
var iops = 1; //image opacity change
var iop2 = 120; //image opacity 2
var iops2 = 2; //image opacity change 2
var iop3 = 80; //image opacity 3
var iops3 = 1.5; //image opacity change 3
var iop4 = 135; //image opacity 4
var iops4 = 1.25; //image opacity change 4
var iop5 = 30; //image opacity 5
var iops5 = 3; //image opacity change 5
var cs = 20; // circle size
var fr = 248;//flasher color red
var fg = 244;//flasher color green
var fb = 177;//flasher color blue
var ft = 200//flasher run time offset value
	
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
	/*console.log('connected to server.');*/
}

function portOpen() {
	/*console.log('the serial port opened.');*/
	serialAvailable = true;
}

function portClose() {
	/*console.log('The serial port closed.');*/
	serialAvailable = false;
}

function serialError() {
	/*console.log("error");*/
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

function draw() {
	background(10);
	console.log(sensorValue);


	tint(ib, tv);
	image(candle, lx, ly);

	if (sensorValue < 25) {
		background(40);
		tint(ib, tv);
		image(candle, lx, ly);
		tint(ib, iop);
		image(firea, lx + 90, ly - 130, iw, ih);
		tint(ib, iop2);
		image(fireb, lx + 85, ly - 80, iw * 0.2, ih * 0.2);
		tint(ib, iop3);
		image(fireb, lx + 140, ly - 120, iw * 0.2, ih * 0.2);
		flashing(lx - 40, ly - 40, cs, iop, fr, fg, fb, ft);
		flashing(lx + 60, ly - 20, cs + 25, iop2, fr, fg, fb, ft);
		flashing(lx, ly - 30, cs + 10, iop3, fr, fg, fb, ft);
		flashing(lx + 260, ly - 90, cs - 5, iop4, fr, fg, fb, ft);
		flashing(lx + 200, ly - 110, cs + 8, iop5, fr, fg, fb, ft);
		flashing(lx - 10, ly + 40, cs, iop, fr, fg, fb, ft);
		flashing(lx - 70, ly + 70, cs + 10, iop4, fr, fg, fb, ft);
		flashing(lx, ly - 10, cs + 10, iop2 - 3, fr, fg, fb, ft);
		flashing(lx + 200, ly + 90, cs + 5, iop5, fr, fg, fb, ft);
		flashing(lx + 250, ly + 110, cs + 8, iop3, fr, fg, fb, ft );
	}else if (sensorValue > 24 && sensorValue < 35) {
		background(30);
		tint(ib, tv);
		image(candle, lx, ly);
		tint(ib, iop);
		image(firea, lx + 100, ly - 105, iw*0.8, ih*0.8);
		tint(ib, iop2);
		image(fireb, lx + 85, ly - 80, iw * 0.2, ih * 0.1);
		tint(ib, iop3);
		image(fireb, lx + 140, ly - 120, iw * 0.2, ih * 0.1);
		flashing(lx - 40, ly - 40, cs, iop, fr, fg, fb, ft);
		flashing(lx + 60, ly - 20, cs + 25, iop2, fr, fg, fb, ft);
		flashing(lx + 260, ly - 90, cs - 5, iop4, fr, fg, fb, ft);
		flashing(lx + 200, ly - 110, cs + 8, iop5, fr, fg, fb, ft);
		flashing(lx - 10, ly + 40, cs, iop, fr, fg, fb, ft);
		flashing(lx, ly - 10, cs + 10, iop2 - 3, fr, fg, fb, ft);
		flashing(lx + 250, ly + 110, cs + 8, iop3, fr, fg, fb, ft );
	}else if (sensorValue > 34 && sensorValue < 45) {
		background(20);
		tint(ib, tv);
		image(candle, lx, ly);
		tint(ib, iop);
		image(firea, lx + 105, ly - 75, iw*0.6, ih*0.6);
		tint(ib, iop2);
		image(fireb, lx + 105, ly - 75, iw * 0.1, ih * 0.1);
		flashing(lx - 40, ly - 40, cs, iop, fr, fg, fb, ft);
		flashing(lx + 60, ly - 20, cs + 25, iop2, fr, fg, fb, ft);
		flashing(lx + 250, ly + 110, cs + 8, iop3, fr, fg, fb, ft );
	}else if (sensorValue > 44 && sensorValue < 55) {
		background(15);
		tint(ib, tv);
		image(candle, lx, ly);
		tint(ib, iop);
		image(firea, lx + 110, ly - 65, iw*0.5, ih*0.5);
		tint(ib, iop2);
		image(fireb, lx + 105, ly - 75, iw * 0.1, ih * 0.1);
		flashing(lx - 40, ly - 40, cs, iop, fr, fg, fb, ft);
		flashing(lx - 40, ly - 40, cs, iop, fr, fg, fb, ft);
		flashing(lx + 60, ly - 20, cs + 25, iop2, fr, fg, fb, ft);
	} else if (sensorValue > 56){
		background(1);
		tint(ib, tv);
		image(candle, lx, ly);
		flashing(lx + 135, ly + 5, cs -5, iop3, 241, 90, 41, 100);
	}


	if (keyIsPressed && !serialAvailable) {
		if (keyCode == 38) {
			sensorValue += 1;
		}
		if (keyCode == 40) {
			sensorValue -= 1;
		}
	}


	/*	if (keyIsPressed && !serialAvailable){
		sensorValue += 1;
	} else if (mouseIsPressed && !serialAvailable){
		sensorValue -= 1;
	}*/

	iop += iops;
	if (iop > tv || iop < tv-85) {
		iops *= -1;
	}

	iop2 += iops2;
	if (iop2 > tv-15 || iop2 < tv-135) {
		iops2 *= -1;
	}

	iop3 += iops3;
	if (iop3 > tv || iop3 < tv-175) {
		iops3 *= -1;
	}

	iop4 += iops4;
	if (iop4 > tv || iop4 < tv-120) {
		iops4 *= -1;
	}

	iop5 += iops5;
	if (iop5 > tv || iop5 < tv-225) {
		iops5 *= -1;
	}

	fill(255);
	text(sensorValue, lx + 310, ly + 200);
}

function mousePressed() {

}


function flashing(cx, cy, d, r,fr, fg, fb, ft) {
	//var op = 0;
	//var sp;

	fill(fr, fg, fb, r - ft);
	noStroke();
	circle(cx, cy, d);
	circle(cx, cy, d / 1.5);
	circle(cx, cy, d / 2);
	circle(cx, cy, d / 3);

	/*op += sp;
	if (op > 255 || op <0){
		sp *= -1;
	}*/
}
