let countdownDisplay1 = document.querySelector('#first');
const userSetMinutesPlayer1 = 5.0;
let preciseTimerSetting1 = userSetMinutesPlayer1 * 60 * 1000;


let startTime1;
let updatedTime1;
let difference1 = 0;
let timeInterval1;
let savedTime1;
let paused1 = 0;
let running1 = 0;
let timeRemaining1 = preciseTimerSetting1 - difference1;

let minutes1 = Math.floor((timeRemaining1 % (1000 * 60 * 60)) / (1000*60));
let seconds1 = Math.floor((timeRemaining1 % (1000 * 60)) / 1000);
let milliseconds1 = Math.floor((timeRemaining1 % (1000* 60)) / 100);

minutes1 = (minutes1 < 10) ? "0" + minutes1 : minutes1;
seconds1 = (seconds1 < 10) ? "0" + seconds1 : seconds1;
milliseconds1 = (milliseconds1 < 10) ? "0" + milliseconds1 : milliseconds1;

countdownDisplay1.innerHTML = minutes1 + ":" + seconds1 + ":" + milliseconds1;


//-------------

let countdownDisplay2 = document.querySelector('#second');
const userSetMinutesPlayer2 = 5.05;
let preciseTimerSetting2 = userSetMinutesPlayer2 * 60 * 1000;


let startTime2;
let updatedTime2;
let difference2 = 0;
let timeInterval2;
let savedTime2;
let paused2 = 0;
let running2 = 0;
let timeRemaining2 = preciseTimerSetting2 - difference2;

let minutes2 = Math.floor((timeRemaining2 % (1000 * 60 * 60)) / (1000*60));
let seconds2 = Math.floor((timeRemaining2 % (1000 * 60)) / 1000);
let milliseconds2 = Math.floor((timeRemaining2 % (1000* 60)) / 100);

minutes2 = (minutes2 < 10) ? "0" + minutes2 : minutes2;
seconds2 = (seconds2 < 10) ? "0" + seconds2 : seconds2;
milliseconds2 = (milliseconds2 < 10) ? "0" + milliseconds2 : milliseconds2;

countdownDisplay2.innerHTML = minutes2 + ":" + seconds2 + ":" + milliseconds2;



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



minutes1 = Math.floor((timeRemaining1 % (1000 * 60 * 60)) / (1000*60));
seconds1 = Math.floor((timeRemaining1 % (1000 * 60)) / 1000);
milliseconds1 = Math.floor((timeRemaining1 % (1000* 60)) /100);

minutes1 = (minutes1 < 10) ? "0" + minutes1 : minutes1;
seconds1 = (seconds1 < 10) ? "0" + seconds1 : seconds1;
milliseconds1 = (milliseconds1 < 10) ? "0" + milliseconds1 : milliseconds1;

countdownDisplay1.innerHTML = minutes1 + ":" + seconds1 + ":" + milliseconds1;

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
    minutes1 = Math.floor((timeRemaining1 % (1000 * 60 * 60)) / (1000*60));
    seconds1 = Math.floor((timeRemaining1 % (1000 * 60)) / 1000);
    milliseconds1 = Math.floor((timeRemaining1 % (1000* 60)) /100);


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
    // countdownDisplay1.innerHTML = minutes1 + ":" + seconds1;

}




//---------------------------------
//these are for second clock

function pauseCountdown2() {
    if (!difference2){
        //if the timer never started, then don't do a thing
    }

    else if (!paused2) {
        clearInterval(timeInterval2);
        savedTime2 = difference2;
        paused2 = 1;
        running2 = 0;

    }

    else {
        startCountdown2();
    }
}

function resetCountdown2(){
    console.log('Reset button was clicked');
    clearInterval(timeInterval2);
    savedTime2 = 0;
    difference2 = 0;
    paused2 = 0;
    running2 = 0;
    let preciseTimerSetting2 = userSetMinutesPlayer2 * 60 * 1000;
    let timeRemaining2 = preciseTimerSetting2 - difference2;



minutes2 = Math.floor((timeRemaining2 % (1000 * 60 * 60)) / (1000*60));
seconds2 = Math.floor((timeRemaining2 % (1000 * 60)) / 1000);
milliseconds2 = Math.floor((timeRemaining2 % (1000* 60)) /100);

minutes2 = (minutes2 < 10) ? "0" + minutes2 : minutes2;
seconds2 = (seconds2 < 10) ? "0" + seconds2 : seconds2;
milliseconds2 = (milliseconds2 < 10) ? "0" + milliseconds2 : milliseconds2;

countdownDisplay2.innerHTML = minutes2 + ":" + seconds2 + ":" + milliseconds2;

}


function startCountdown2(){
    console.log("working startCountdown");
    if(!running2){
        //grab the start time
        startTime2 = new Date().getTime();

        // run the function getDisplayTime2 every millisecond
        timeInterval2 = setInterval(getDisplayTime2, 1);

        paused2 = 0;
        running2 = 1;
        countdownDisplay2.style.color = "black";
    } 


}



function getDisplayTime2(){
    updatedTime2 = new Date().getTime();
    if (savedTime2){
        difference2 = (updatedTime2 - startTime2) + savedTime2;
        timeRemaining2 = (preciseTimerSetting2 - difference2);

    }
    else {
        
        difference2 = updatedTime2 - startTime2;
        timeRemaining2 = preciseTimerSetting2 - difference2;
       
    }
    minutes2 = Math.floor((timeRemaining2 % (1000 * 60 * 60)) / (1000*60));
    seconds2 = Math.floor((timeRemaining2 % (1000 * 60)) / 1000);
    milliseconds2 = Math.floor((timeRemaining2 % (1000* 60)) /100);


    if(minutes2 <= 0){
        minutes2 = 0;
    }

    if(seconds2 <= 0){
        seconds2 = 0;
    }

    if(milliseconds2 <= 0){
        milliseconds2 = 0;
    }
    
    minutes2 = (minutes2 < 10) ? "0" + minutes2 : minutes2;
    seconds2 = (seconds2 < 10) ? "0" + seconds2 : seconds2;
    milliseconds2 = (milliseconds2 < 10) ? "0" + milliseconds2 : milliseconds2;

  
    console.log("The Milliseconds are at: " + milliseconds2);
    countdownDisplay2.innerHTML = minutes2 + ":" + seconds2 + ":" + milliseconds2;
    // countdownDisplay2.innerHTML = minutes2 + ":" + seconds2;

}
