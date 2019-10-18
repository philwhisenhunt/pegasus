const countdownTimer = {
    startTime: null,
    paused: false,
    savedTime: null,
    preciseTimerSetting: 300000,
    timeRemaining: null,
    //countdownDisplay: document.querySelector('#first'), //how do I get this to select one clock in one object, and another in another object?
    timeRemaining: null,
    paused: 1,
    running: 0,

    initialize: function(){
        //once the page loads, set the timer to a certain time
        this.running = 1;
        //set running to yes
        //then, once a button is hit, start the other timer
    },

    flipper: function() { 
        //if running, then depending on the button, start the other clock
        //if button pressed equals second, start timer one
        //if button pressed equals first, start timer two
    },


    pause: function() {
        this.paused = true;
        console.log("Pause was hit");
        this.getDisplayTime();
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
        
        this.countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
    },

    // flip: function (){
    //     console.log('something happened');
    //     if(countdownTimer1.paused == true){
    //         countdownTimer2.paused = true;
    //         countdownTimer1.start(); 
    //     }



    //     else if(countdownTimer1.paused == true){
    //         countdownTimer1.paused = true;
    //         countdownTimer2.start(); 
    //     }

    //     else{
    //         countdownTimer1.start(); 

    //     }
    // },

    start: function(){
        //if there is time remaining and the other clock is running
        //pause the other time
        //start this timer

       
        //console.log('starting?');
        startTime = new Date().getTime();

        setInterval(() => this.getDisplayTime(), 1);
 

        //Pause the second timer
        this.paused = false;

       

       // this.countdownDisplay.style.color = "black";
        //how to get this to start the time? 
    },

    getDisplayTime: function(){
        //var transfer = this.preciseTimerSetting;
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
           
            
            minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000*60));
            seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            milliseconds = Math.floor((timeRemaining % (1000* 60)) /100);

            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
            milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
            //console.log("This time " + minutes + ":" + seconds + ":" + milliseconds);
            //countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;

           
        }
        this.countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;

        /*
        
    
    
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
        */
        // console.log("minutes: " + minutes + "seconds: " + seconds); //why isn't this outputting anything?
        //this.countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
        // countdownDisplay.innerHTML = minutes + ":" + seconds;
    }


};

const countdownTimer2 = Object.assign({}, countdownTimer, { countdownDisplay: document.querySelector('#first')});
const countdownTimer1 = Object.assign({}, countdownTimer, { countdownDisplay: document.querySelector('#second')});

//perhaps contain the above in an if else statement
/*
If countdownTimer1.running === true
then run countdownTimer2
else
run countdownTimer1
*/

// timeRemaining = this.preciseTimerSetting - difference;
           
            
// minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000*60));
// seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
// milliseconds = Math.floor((timeRemaining % (1000* 60)) /100);

// minutes = (minutes < 10) ? "0" + minutes : minutes;
// seconds = (seconds < 10) ? "0" + seconds : seconds;
// milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
// countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
