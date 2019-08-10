console.log('working at all?');
const countdownTimer = {
    startTime: null,
    paused: false,
    pause: function() {
        this.paused = true;
        console.log("Working");

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

    },

    reset: function(){
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
    },

    start: function(){
        console.log('working?');
        startTime1 = new Date().getTime();

        // run the function getDisplayTime1 every millisecond
        timeInterval1 = setInterval(this.getDisplayTime(), 1);   

        //Pause the second timer
        this.paused = false;

        countdownDisplay1.style.color = "black";
    },

    getDisplayTime: function(){
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
    
        if(timeRemaining1 <= 0 ){
            firstClock.style.backgroundColor = '#FF6347';  
        }
    
        countdownDisplay1.innerHTML = minutes1 + ":" + seconds1 + ":" + milliseconds1;
        // countdownDisplay1.innerHTML = minutes1 + ":" + seconds1;
    }


};

const countdownTimer1 = Object.assign({}, countdownTimer);
const countdownTimer2 = Object.assign({}, countdownTimer);