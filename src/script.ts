const videoElement = document.getElementById("video")! as HTMLVideoElement;
const button = document.getElementById("button")! as HTMLButtonElement;

// Prompt to select media stream, pass to video element then play
async function selecMediaStream() {
  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = captureStream;
    videoElement.onloadedmetadata = () => videoElement.play();
  } catch (err: any) {
    console.error("Whoops! error here: ", err.message);
  }
}

button.addEventListener("click", async () => {
  // Disabe Button
  button.disabled = true;

  // Start Picture in Picture
  await videoElement.requestPictureInPicture();

  // Reset Button
  button.disabled = false;
});

// On load
selecMediaStream();
