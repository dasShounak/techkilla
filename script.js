///////////////////////////////////////////////////
// Author: Shounak Das
// GitHub: https://github.com/dasShounak
//////////////////////////////////////////////////.

const webcamFrame = document.getElementById("webcam");
const canvasFrame = document.getElementById("canvas");
const startButton = document.getElementById("start");
const captureButton = document.getElementById("capture");
const stopButton = document.getElementById("stop");
const retakeButton = document.getElementById("retake");
const downloadButton = document.getElementById("download");
const thankYou = document.getElementById("thank-you");
const webcam = new Webcam(webcamFrame, "user", canvasFrame);

// Start
startButton.addEventListener("click", () => {
    webcam.start();
    webcamFrame.classList.remove("hidden");
    startButton.classList.add("hidden");
    captureButton.classList.remove("hidden");
    stopButton.classList.remove("hidden");
});

// Capture
captureButton.addEventListener("click", () => {
    let picture = webcam.snap();
    downloadButton.href = picture;
    canvasFrame.classList.remove("hidden");
    webcamFrame.classList.add("hidden");
    captureButton.classList.add("hidden");
    stopButton.classList.add("hidden");
    retakeButton.classList.remove("hidden");
    downloadButton.classList.remove("hidden");
});

// Download
downloadButton.addEventListener("click", () => {
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
    webcam.stop();
    stopButton.classList.add("hidden");
    captureButton.classList.add("hidden");
    webcamFrame.classList.add("hidden");
    startButton.classList.remove("hidden");
});
