const countdownTimer = {
    startTime: null,
    paused: false,
    savedTime: null,
    preciseTimerSetting: null,
    timeRemaining: null,
    countdownDisplay1: document.querySelector('#first'),
    timeRemaining: preciseTimerSetting - difference1,


    pause: function() {
        this.paused = true;
        console.log("Working");

        if (!difference){
            //if the timer never started, then don't do a thing
        }
    
        else if (!paused) {
            clearInterval(timeInterval);
            savedTime = difference;
            paused = 1;
            running = 0;
            return savedTime;
    
        }
    
        else {
            startCountdown1();
        }

    },

    reset: function(){
        clearInterval(timeInterval1);
        this.savedTime = 0;
        difference1 = 0;
        paused1 = 0;
        running1 = 0;
        this.preciseTimerSetting = userSetMinutesPlayer1 * 60 * 1000;
        timeRemaining = this.preciseTimerSetting - difference1;
    
    
    
        minutes1 = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000*60));
        seconds1 = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        milliseconds1 = Math.floor((timeRemaining % (1000* 60)) /100);
        
        minutes1 = (minutes1 < 10) ? "0" + minutes1 : minutes1;
        seconds1 = (seconds1 < 10) ? "0" + seconds1 : seconds1;
        milliseconds1 = (milliseconds1 < 10) ? "0" + milliseconds1 : milliseconds1;
        
        countdownDisplay1.innerHTML = minutes1 + ":" + seconds1 + ":" + milliseconds1;
    },

    start: function(){
        console.log('working?');
        startTime1 = new Date().getTime();

        // run the function getDisplayTime1 every millisecond
        timeInterval1 = setInterval(this.getDisplayTime(), 1);   

        //Pause the second timer
        this.paused = false;

        this.countdownDisplay1.style.color = "black";
        //how to get this to start the time? 
    },

    getDisplayTime: function(){

        //how to I pull out the start time from a different method in the same object?
        updatedTime = new Date().getTime();
        if (this.savedTime){
            difference = (updatedTime - startTime) + savedTime;
            timeRemaining = (this.preciseTimerSetting - difference);
    
        }
        else {
            
            difference = updatedTime - startTime;
            timeRemaining = this.preciseTimerSetting - difference;
           
        }
        minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000*60));
        seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        milliseconds = Math.floor((timeRemaining % (1000* 60)) /100);
    
    
        if(minutes <= 0){
            minutes = 0;
        }
    
        if(seconds <= 0){
            seconds = 0;
        }
    
        if(milliseconds <= 0){
            milliseconds = 0;
        }
        
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
    
        if(timeRemaining <= 0 ){
            // this.firstClock.style.backgroundColor = '#FF6347';  
        }
    
        this.countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
        // countdownDisplay.innerHTML = minutes + ":" + seconds;
    }


};

const countdownTimer1 = Object.assign({}, countdownTimer);
const countdownTimer2 = Object.assign({}, countdownTimer);