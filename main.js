var drawHappy = "";
var drawSad = "";
var drawBlank = "";
var drawShock = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Recording..."

    clear();
    fill("gold");
    stroke("black");
    circle(200, 200, 250);
    fill("black");
    circle(150, 170, 30);
    circle(250, 170, 30);

    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var transcriptVal = event.results[0][0].transcript;

    if(transcriptVal == "happy") {
        document.getElementById("status").innerHTML = "Drawing happ face...";
        drawHappy = "drawing";
    } else if(transcriptVal == "sad") {
        document.getElementById("status").innerHTML = "Drawing sad face...";
        drawSad = "drawing";
    } else if(transcriptVal == "neutral") {
        document.getElementById("status").innerHTML = "Drawing neutral face...";
        drawBlank = "drawing";
    } else if(transcriptVal == "surprised") {
        document.getElementById("status").innerHTML = "Drawing surprised face...";
        drawShock = "drawing";
    } else {
        document.getElementById("status").innerHTML = "Try again...";
    }
}

function preload() {}

function setup() {
    canvas = createCanvas(400,400);
    strokeWeight(10);
}

function draw() {
    if(drawHappy == "drawing") {
        noFill();
        arc(200, 230, 100, 80, 0, 4 * QUARTER_PI);
        document.getElementById("status").innerHTML = "Drawn happy face";
        drawHappy = "";
    }
    if(drawSad == "drawing") {
        noFill();
        arc(200, 250, 100, 80, 4 * QUARTER_PI, 8 * QUARTER_PI);
        document.getElementById("status").innerHTML = "Drawn sad face";
        drawSad = "";
    }
    if(drawBlank == "drawing") {
        line(140, 240, 260, 240);
        document.getElementById("status").innerHTML = "Drawn neutral face";
        drawBlank = "";
    }
    if(drawShock == "drawing") {
        fill("black");
        circle(200, 260, 60);
        document.getElementById("status").innerHTML = "Drawn surprised face";
        drawShock = "";
    }
}