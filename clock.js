let countdownDisplay1 = document.querySelector('#first');
const userSetMinutesPlayer1 = 5.05;
let preciseTimerSetting1 = userSetMinutesPlayer1 * 60 * 1000;


let startTime1;
let updatedTime1;
let difference1 = 0;
let timeInterval1;
let savedTime1;
let paused1 = 0;
let running1 = 0;
let timeRemaining1 = preciseTimerSetting1 - difference1;

let minutes = Math.floor((timeRemaining1 % (1000 * 60 * 60)) / (1000*60));
let seconds = Math.floor((timeRemaining1 % (1000 * 60)) / 1000);
let milliseconds = Math.floor((timeRemaining1 % (1000* 60)) / 100);

minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;
milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

countdownDisplay1.innerHTML = minutes + ":" + seconds + ":" + milliseconds;


// startButton = document.querySelector('.all');




//  setInterval(startDecreaser, 1000);

function pauseCountdown1() {
    if (!difference1){
        //if the timer never started, then don't do a thing
    }

    else if (!paused1) {
        clearInterval(timeInterval1);
        savedTime1 = difference1;
        paused1 = 1;
        running1 = 0;

    }

    else {
        startCountdown1();
    }
}

function resetCountdown1(){
    console.log('Reset button was clicked');
    clearInterval(timeInterval1);
    savedTime1 = 0;
    difference1 = 0;
    paused1 = 0;
    running1 = 0;
    let preciseTimerSetting1 = userSetMinutesPlayer1 * 60 * 1000;
    let timeRemaining1 = preciseTimerSetting1 - difference1;



let minutes = Math.floor((timeRemaining1 % (1000 * 60 * 60)) / (1000*60));
let seconds = Math.floor((timeRemaining1 % (1000 * 60)) / 1000);
let milliseconds = Math.floor((timeRemaining1 % (1000* 60)) /100);

minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;
milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

countdownDisplay1.innerHTML = minutes + ":" + seconds + ":" + milliseconds;

}


function startCountdown1(){
    console.log("working startCountdown");
    if(!running1){
        //grab the start time
        startTime1 = new Date().getTime();

        // run the function getDisplayTime1 every millisecond
        timeInterval1 = setInterval(getDisplayTime1, 1);

        paused1 = 0;
        running1 = 1;
        countdownDisplay1.style.color = "black";
    } 


}



function getDisplayTime1(){
    updatedTime1 = new Date().getTime();
    if (savedTime1){
        difference1 = (updatedTime1 - startTime1) + savedTime1;
        timeRemaining1 = (preciseTimerSetting1 - difference1);

    }
    else {
        
        difference1 = updatedTime1 - startTime1;
        timeRemaining1 = preciseTimerSetting1 - difference1;
       
    }
    let minutes1 = Math.floor((timeRemaining1 % (1000 * 60 * 60)) / (1000*60));
    let seconds1 = Math.floor((timeRemaining1 % (1000 * 60)) / 1000);
    let milliseconds1 = Math.floor((timeRemaining1 % (1000* 60)) /100);


    if(minutes1 <= 0){
        minutes1 = 0;
    }

    if(seconds1 <= 0){
        seconds1 = 0;
    }

    if(milliseconds1 <= 0){
        milliseconds1 = 0;
    }
    
    minutes1 = (minutes1 < 10) ? "0" + minutes1 : minutes1;
    seconds1 = (seconds1 < 10) ? "0" + seconds1 : seconds1;
    milliseconds1 = (milliseconds1 < 10) ? "0" + milliseconds1 : milliseconds1;

  
    console.log("The Milliseconds are at: " + milliseconds1);
    countdownDisplay1.innerHTML = minutes1 + ":" + seconds1 + ":" + milliseconds1;
}







