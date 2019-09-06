const countdownTimer = {
    startTime: null,
    paused: false,
    savedTime: null,
    preciseTimerSetting: null,
    timeRemaining: null,
    countdownDisplay: document.querySelector('#first'), //how do I get this to select one clock in one object, and another in another object?
    timeRemaining: null,


    pause: function() {
        this.paused = true;
        console.log("Pause was hit");

        if (!difference){
            //if the timer never started, then don't do a thing
            console.log("no difference, didn't do a thing");
        }
    
        else if (!paused) {
            clearInterval(timeInterval);
            savedTime = difference;
            paused = 1;
            running = 0;
            timeRemaining = preciseTimerSetting - difference;
            return savedTime;
    
        }
    
        else {
            this.start();
        }

    },

    reset: function(){
        clearInterval(timeInterval1);
        this.savedTime = 0;
        difference = 0;
        paused = 0;
        running = 0;
        this.preciseTimerSetting = userSetMinutesPlayer * 60 * 1000;
        timeRemaining = this.preciseTimerSetting - difference;
    
    
    
        minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000*60));
        seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        milliseconds = Math.floor((timeRemaining % (1000* 60)) /100);
        
        minutes = (minutes1 < 10) ? "0" + minutes : minutes;
        seconds = (seconds1 < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
        
        countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
    },

    start: function(){
        console.log('starting?');
        startTime = new Date().getTime();
        console.log(startTime);
        console.log(this.startTime);

        // run the function getDisplayTime1 every millisecond
        timeInterval = setInterval(this.getDisplayTime(), 1);   
        //console.log(timeInterval);

        //Pause the second timer
        this.paused = false;

        this.countdownDisplay.style.color = "black";
        //how to get this to start the time? 
    },

    getDisplayTime: function(){

        //how to I pull out the start time from a different method in the same object?
        updatedTime = new Date().getTime();
        if (this.savedTime){
            difference = (updatedTime - startTime) + savedTime;
            timeRemaining = (this.preciseTimerSetting - difference);
            return this.timeRemaining;//trying this
    
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