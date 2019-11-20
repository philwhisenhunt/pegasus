const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const resetBtn = document.getElementById('resetBtn');

btn1.addEventListener('click', function btn1ClickHandler(e){
    countdownTimer1.start();
    countdownTimer2.pause();
});

btn2.addEventListener('click', function btn2ClickHandler(e){
    countdownTimer2.start();
    countdownTimer1.pause();
});

resetBtn.addEventListener('click', function resetClickHandler(e){
    countdownTimer1.reset();
    countdownTimer2.reset();

});


window.addEventListener('keydown', function(e) {
    

    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        if (e.keyCode == 32) {
            if(countdownTimer1.paused == 1){
                countdownTimer1.start();
                countdownTimer2.pause();
            }
            else{
                countdownTimer2.start();
                countdownTimer1.pause();
            }
  
  
        }
      }
});



document.onreadystatechange = function () {

        countdownTimer1.reset();
        countdownTimer2.reset();
    
}


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
    userSetMinutesPlayer: .03,
    firstTimerButton: document.getElementById('button1'), 
    secondTimerButton: document.getElementById('button2'), 
    minutes: null,
    seconds: null,
    milliseconds: null,
    difference: null,

    start: function(){
      
        // console.log('Startedeeee');
        // console.log(this.paused);
        this.paused = 0; //no longer paused
        this.startTime = new Date().getTime();
      
        // countdownTimer2.pause();
        setInterval(() => this.getDisplayTime(), 1);

    },


    pause: function() {
        // console.log('in pause'); 
        // console.log(this.paused);

        if(this.paused == 0){
            //take a timestamp
            this.pauseTime = new Date().getTime();
            //subtract the original time stamp from it.
            this.savedTime = this.pauseTime - this.startTime;
            console.log(this.savedTime + " is the saved time");
            //save the time
            console.log("Pause was hit");
            this.paused = 1;
        }
    
    
    },

 
    getDisplayTime: function(){
        // console.log('Now in getDisplayTime');
        // console.log(this.preciseTimerSetting);


        if(this.paused == 0){
            
            //console.log('in while');
       
            this.updatedTime = new Date().getTime();
            if (this.savedTime){
                //there is saved time, so that is why it is stopping
                console.log('in saved time');
                this.difference = (this.updatedTime - this.startTime) + this.savedTime;
                this.timeRemaining = (this.preciseTimerSetting - this.difference);
                // return this.timeRemaining;//trying this

                this.minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000*60));
                this.seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
                this.milliseconds = Math.floor((this.timeRemaining % (1000* 60)) /100);

                this.minutes = (this.minutes < 10) ? "0" + this.minutes : this.minutes;
                this.seconds = (this.seconds < 10) ? "0" + this.seconds : this.seconds;
                this.milliseconds = (this.milliseconds < 10) ? "0" + this.milliseconds : this.milliseconds;
        
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
        if(this.timeRemaining <= 0){
            this.countdownDisplay.innerHTML = "00:00:00";        
        }
        else{
            this.countdownDisplay.innerHTML = this.minutes + ":" + this.seconds + ":" + this.milliseconds;
        }
        
    
    },

    reset: function(){
        //clearInterval(timeInterval1);
        this.savedTime = 0;
        this.difference = 0;
        this.paused = 1;
        this.running = 0;
        this.minutes = 0;
        this.preciseTimerSetting = this.userSetMinutesPlayer * 60 * 1000;
        console.log(this.userSetMinutesPlayer);
        console.log(this.preciseTimerSetting);

        this.timeRemaining = this.preciseTimerSetting - this.difference;
    
    
    
        this.minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000*60));
        this.seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
        this.milliseconds = Math.floor((this.timeRemaining % (1000* 60)) /100);

        this.minutes = (this.minutes < 10) ? "0" + this.minutes : this.minutes;
        this.seconds = (this.seconds < 10) ? "0" + this.seconds : this.seconds;
        this.milliseconds = (this.milliseconds < 10) ? "0" + this.milliseconds : this.milliseconds;

        this.countdownDisplay.innerHTML = this.minutes + ":" + this.seconds + ":" + this.milliseconds;

    }


};



const countdownTimer2 = Object.assign({}, countdownTimer, { name: "timer1", countdownDisplay: document.querySelector('#first')});
const countdownTimer1 = Object.assign({}, countdownTimer, { name: "timer2",countdownDisplay: document.querySelector('#second')});
