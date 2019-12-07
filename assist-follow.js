const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const resetBtn = document.getElementById('resetBtn');

const cdTimer1 = createTimer("timer1", document.querySelector('#first'));
const cdTimer2 = createTimer("timer2", document.querySelector('#second'));

btn1.addEventListener('click',function btn1ClickHandler(e){
    cdTimer1.start();
    cdTimer2.pause();
});

btn2.addEventListener('click', function btn2Clickhandler(e){
    cdTimer1.pause();
    cdTimer2.start();
});

resetBtn.addEventListener('click', function resetClickHandler(e){
    cdTimer1.reset();
    cdTimer2.reset();
})



function createTimer(name, domElement){
    //first we create a variable with PUBLIC_API

    const PUBLIC_API = {
        reset,
        start,
        pause,
        setPreciseTimerSetting
    }

    let startTime = null;
    let paused = true;
    let curTime = 0;
    let preciseTimerSetting = 30000;
    let savedTime = null;

    //why do we return public api here?
    return PUBLIC_API;

    function setPreciseTimerSetting(timerSetting){
        preciseTimerSetting = timerSetting;
    }

    function reset(){
        starteTime = null;
        paused = true;
        savedTime = null;
        printDisplay("");
    }

    //start a timer
    function start(){
        paused = false;
        console.log(name, "Started");
        //if  a startTime exists, don't overwrite it
        startTime = startTime ? startTime : new Date().getTime();

        setInterval(updated, 1);
    }

    function pause(){
        paused = true;
        console.log(name, "Paused");
    }

    function printDisplay(str){
        domElement.innerHTML = str;
    }

    function toHumanReadableTime(minutes, seconds, milliseconds){
        const min = (minutes < 10) ? "0" + minutes : minutes;
        const sec = (seconds <10) ? "0" + seconds : seconds;
        const ms = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
        return `${min}:${sec}:${ms}`;

    }
    function updateTime(){
        if(!paused){
            const curTime = new Date().getTime();
            const difference = curTime - startTime;
            const timeRemaining = precideTimerSetting - difference;
           
            savedTime = difference;

            const minutes = Math.floor((timeRemaining % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 100);

            printDisplay(toHumanReadableTime(minutes, seconds, milliseconds));
        }
    }

}