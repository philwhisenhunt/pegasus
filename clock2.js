const countdownTimer = {
    startTime: null,
    paused: 1,
    savedTime: null,
    preciseTimerSetting: 300000,
    timeRemaining: null,
    //countdownDisplay: document.querySelector('#first'), //how do I get this to select one clock in one object, and another in another object?
    timeRemaining: null,
    running: 0,
    pauseTime: null,
    userSetMinutesPlayer: 5,
    firstTimerButton: document.getElementById('button1'), 

    start: function(){
      
        console.log('Started, in 1.')
        this.paused = 0;
        startTime = new Date().getTime();
      
        countdownTimer2.pause();
        setInterval(() => this.getDisplayTime(), 1);

    },


    pause: function() {
        console.log('in pause'); // pause is not being hit.
        if(this.paused == 1){
            //console.log("Pause was hit");
            this.paused = 1;
            
            let holder = this.getDisplayTime(); 
            //still undefined?
            console.log(holder);
    
            pauseTime = new Date().getTime();
            console.log(this.pauseTime);
        }
        

/*
        if (!difference){
            //if the timer never started, then don't do a thing
            console.log("no difference, didn't do a thing");
        }
    
        else if (!paused) {
            // clearInterval(timeInterval);
            // savedTime = difference;
            // paused = 1;
            // running = 0;
            // timeRemaining = preciseTimerSetting - difference;
            // return savedTime;
    
        }
    
        else {
            this.start();
        }
        */

    },

    reset: function(){
        //clearInterval(timeInterval1);
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
        
        this.countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
    },


    getDisplayTime: function(){
        console.log('Now in 2');

        //var transfer = this.preciseTimerSetting;
        //how to I pull out the start time from a different method in the same object?

        if(this.paused == 0){
            console.log('in whileeeeeeeeeee');
       
            updatedTime = new Date().getTime();
            if (this.savedTime){
                console.log('in saved time');
                difference = (updatedTime - startTime) + savedTime;
                timeRemaining = (this.preciseTimerSetting - difference);
                return this.timeRemaining;//trying this
        
            }
            else {
                console.log('Now in the else of getDisplaytime');
                difference = updatedTime - startTime;
            
                timeRemaining = this.preciseTimerSetting - difference;
            
                
                minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000*60));
                seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                milliseconds = Math.floor((timeRemaining % (1000* 60)) /100);

                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;
                milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
                //console.log("This time " + minutes + ":" + seconds + ":" + milliseconds);
                //countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;

            
            }
            
        }
        console.log('Three');

        this.countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;

    
    }


};

const countdownTimer2 = Object.assign({}, countdownTimer, { countdownDisplay: document.querySelector('#first')});
const countdownTimer1 = Object.assign({}, countdownTimer, { countdownDisplay: document.querySelector('#second')});

