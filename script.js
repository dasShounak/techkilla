///////////////////////////////////////////////////
// Author: Shounak Das
// GitHub: https://github.com/dasShounak
//////////////////////////////////////////////////.

const webcamFrame = document.getElementById("webcam");
const canvasFrame = document.getElementById("canvas");
const frames = document.getElementById("frames");
const thankYou = document.getElementById("thank-you");

// Control buttons
const startButton = document.getElementById("start");
const captureButton = document.getElementById("capture");
const stopButton = document.getElementById("stop");
const retakeButton = document.getElementById("retake");
const downloadButton = document.getElementById("download");
const frameNext = document.getElementById("frame-next");

// Frame color buttons
const frameWhite = document.getElementById("frame__white");
const frameBlack = document.getElementById("frame__black");
const frameRed = document.getElementById("frame__red");
const frameBlue = document.getElementById("frame__blue");
const frameYellow = document.getElementById("frame__yellow");
const frameGreen = document.getElementById("frame__green");

// Create webcam element
const webcam = new Webcam(webcamFrame, "user", canvasFrame);

// Create drawing context
const ctx = canvas.getContext("2d");

// Start
startButton.addEventListener("click", () => {

    webcam.start(); // Start webcam
    
    webcamFrame.classList.remove("hidden");
    startButton.classList.add("hidden");
    captureButton.classList.remove("hidden");
    stopButton.classList.remove("hidden");
});

// Capture
captureButton.addEventListener("click", () => {
    
    webcam.snap(); // Capture photo

    canvasFrame.classList.remove("hidden");
    webcamFrame.classList.add("hidden");
    captureButton.classList.add("hidden");
    stopButton.classList.add("hidden");
    frames.classList.remove("hidden");
    frames.classList.add("flex");
});

// Select Frame
frameNext.addEventListener("click", () => {
    frames.classList.remove("flex");
    frames.classList.add("hidden");
    retakeButton.classList.remove("hidden");
    downloadButton.classList.remove("hidden");
});

// Download
downloadButton.addEventListener("click", () => {
    // Save captured photo
    canvas.toBlob(function (blob) {
        saveAs(blob, "img.png");
    })

    downloadButton.classList.add("hidden");
    retakeButton.classList.add("hidden");
    canvasFrame.classList.add("hidden");
    thankYou.classList.remove("hidden");
    thankYou.classList.add("flex");
});

// Retake
retakeButton.addEventListener("click", () => {
    retakeButton.classList.add("hidden");
    downloadButton.classList.add("hidden");
    canvasFrame.classList.add("hidden");
    webcamFrame.classList.remove("hidden");
    captureButton.classList.remove("hidden");
    stopButton.classList.remove("hidden");
});

// Stop
stopButton.addEventListener("click", () => {

    webcam.stop(); // Stop webcam

    stopButton.classList.add("hidden");
    captureButton.classList.add("hidden");
    webcamFrame.classList.add("hidden");
    startButton.classList.remove("hidden");
    webcamFrame.style.borderWidth = "0px";
});


// Set frame color
frameWhite.addEventListener("click", () => {
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = "40";
    ctx.strokeRect(0, 0, canvasFrame.width, canvasFrame.height);
});

frameBlack.addEventListener("click", () => {
    ctx.strokeStyle = "#000";
    ctx.lineWidth = "40";
    ctx.strokeRect(0, 0, canvasFrame.width, canvasFrame.height);
});

frameRed.addEventListener("click", () => {
    ctx.strokeStyle = "#EF5350";
    ctx.lineWidth = "40";
    ctx.strokeRect(0, 0, canvasFrame.width, canvasFrame.height);
});

frameBlue.addEventListener("click", () => {
    ctx.strokeStyle = "#42a5f5";
    ctx.lineWidth = "40";
    ctx.strokeRect(0, 0, canvasFrame.width, canvasFrame.height);
});

frameYellow.addEventListener("click", () => {
    ctx.strokeStyle = "#FFD54F";
    ctx.lineWidth = "40";
    ctx.strokeRect(0, 0, canvasFrame.width, canvasFrame.height);
});

frameGreen.addEventListener("click", () => {
    ctx.strokeStyle = "#66BB6A";
    ctx.lineWidth = "40";
    ctx.strokeRect(0, 0, canvasFrame.width, canvasFrame.height);
});
