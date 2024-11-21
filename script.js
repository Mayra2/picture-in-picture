const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Async function to prompt the user to select media stream, pass to video and play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch  (error){
        console.log('error', error);
    }
}
buttonElement.addEventListener('click', async () => {
    //Disable button
    buttonElement.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
   //Restart
    buttonElement.disabled =false;
})
selectMediaStream(); 