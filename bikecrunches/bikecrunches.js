const video=document.querySelector("#bikeVid");  
const myAudio=document.querySelector("#musicPlay");
function playVideo(){
 video.play(); 
 myAudio.play()
}
function stopVideo(){
    video.pause();
    myAudio.pause();
    video.currentTime = 0;
}



let timerID
const buttonPlay = document.querySelector('#bikeStart'); 
buttonPlay.addEventListener("click", function() {
    timerID = setInterval(timerS, 1000);
    playVideo();
   
})

const buttonStop = document.querySelector('#bikePause'); 
buttonStop.addEventListener("click", function() {
    stopTimer()
   stopVideo()
});

const timer = 3;
let amountTime = timer * 60;

function timerS() {
    const countdown = document.querySelector('#bikeCountdown');
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if(amountTime < 0) {
       amountTime = 0;
       stopVideo()
       countdown.innerHTML = "Fatto!";
       setTimeout(resetTimer, 5000);
    }

}

function stopTimer() {
         clearInterval(timerID);
     
      }


    function resetTimer() {
        location.reload();
    }









