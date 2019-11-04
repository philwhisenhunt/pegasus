const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const resetBtn = document.getElementById('resetBtn');

btn1.addEventListener('click', function btn1ClickHandler(e){
    countdownTimer1.start();
    countdownTimer2.pause();
});

btn1.addEventListener('click', function btn2ClickHandler(e){
    countdownTimer2.start();
    countdownTimer1.pause();
});

resetBtn.addEventListener('click', function resetClickHandler(e){
    resetCountdown2.reset();
});


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
    secondTimerButton: document.getElementById('button2'), 
    minutes: null,
    seconds: null,
    milliseconds: null,
    difference: null,

    start: function(){
      
        console.log('Started');
        console.log(this.paused);
        this.paused = 0; //no longer paused
        this.startTime = new Date().getTime();
      
        // countdownTimer2.pause();
        setInterval(() => this.getDisplayTime(), 1);

    },


    pause: function() {
        console.log('in pause'); 
        console.log(this.paused);

        if(this.paused == 0){
            console.log("Pause was hit");
            this.paused = 1;
        }
    
    
    },

 
    getDisplayTime: function(){
        console.log('Now in getDisplayTime');

        if(this.paused == 0){
            //console.log('in while');
       
            this.updatedTime = new Date().getTime();
            if (this.savedTime){
                console.log('in saved time');
                this.difference = (this.updatedTime - this.startTime) + this.savedTime;
                this.timeRemaining = (this.preciseTimerSetting - this.difference);
                // return this.timeRemaining;//trying this
        
            }
            else {
                //console.log('Now in the else of getDisplaytime');
                this.difference = this.updatedTime - this.startTime;
                this.savedTime = this.difference;
                this.timeRemaining = this.preciseTimerSetting - this.difference;
            
                
                this.minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000*60));
                this.seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
                this.milliseconds = Math.floor((this.timeRemaining % (1000* 60)) /100);

                this.minutes = (this.minutes < 10) ? "0" + this.minutes : this.minutes;
                this.seconds = (this.seconds < 10) ? "0" + this.seconds : this.seconds;
                this.milliseconds = (this.milliseconds < 10) ? "0" + this.milliseconds : this.milliseconds;
                //console.log("This time " + minutes + ":" + seconds + ":" + milliseconds);
                //countdownDisplay.innerHTML = minutes + ":" + seconds + ":" + milliseconds;

            
            }
            
        }
        //console.log('Three');

        this.countdownDisplay.innerHTML = this.minutes + ":" + this.seconds + ":" + this.milliseconds;

    
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
    }


};



const countdownTimer2 = Object.assign({}, countdownTimer, { name: "timer1", countdownDisplay: document.querySelector('#first')});
const countdownTimer1 = Object.assign({}, countdownTimer, { name: "timer2",countdownDisplay: document.querySelector('#second')});
