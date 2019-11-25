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
}