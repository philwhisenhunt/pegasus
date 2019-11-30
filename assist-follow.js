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


}