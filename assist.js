// the below accomplishes the same thing as having it html click attribute, I just prefer doing it this way
const btn1 = document.getElementById('button1')
const btn2 = document.getElementById('button2')
const resetBtn = document.getElementById('resetBtn')

const cdTimer1 = createTimer("timer1", document.querySelector('#first'))
const cdTimer2 = createTimer("timer2", document.querySelector('#second'))

btn1.addEventListener('click', function btn1ClickHandler(e){
    cdTimer1.start()
    cdTimer2.pause()
})
btn2.addEventListener('click', function btn2ClickHandler(e){
    cdTimer2.start()
    cdTimer1.pause()
})
resetBtn.addEventListener('click', function resetClickHandler(e){
    cdTimer1.reset() 
    cdTimer2.reset() 
})

// this is called a factory function.
// it returns a new object 
function createTimer(name, domElement){
// I put PUBLIC_API at the top, because it's the most important.
// It's what we plan to expose
const PUBLIC_API = {
		reset,
    start,
    pause,
    setPreciseTimerSetting
  }

// storing things before the return statement makes them private
// this is typically a good practice if you don't need the variables outside the object
// note: you can still access these in the methods of the Object that is returned because of the glory of closure!
let startTime = null;
let paused = true;
let curTime = 0;
let preciseTimerSetting = 300000;
let savedTime = null;


	// return the PUBLIC_API
  // the functions declared inside this function are not exposed unless 
  // they are explicitly added to the PUBLIC_API object
	return PUBLIC_API

	// a simpler setter function to allow for a private setting to be changed in a controlled manner
  function setPreciseTimerSetting(timerSetting){
  	preciseTimerSetting = timerSetting
	}
  
  function reset(){
  	startTime = null
    paused = true
    savedTime = null
    printDisplay("")
	}
  
  // start starts a timer
  function start(){
    paused = false; //no longer paused
    console.log(name, 'Started');

    // if a startTime already exists, don't overwrite it... just in case, i guess
    startTime = startTime ? startTime : new Date().getTime();

    setInterval(updateTime, 1)
  }
  
  function pause(){
    paused = true
    console.log(name, "Paused")
    /* printDisplay("PAUSED") */
  }

  // printDisplay takes in a string a puts it on the DOM 
  function printDisplay(str){
    domElement.innerHTML = str
  }
  
  function toHumanReadableTime(minutes, seconds, milliseconds){
    const min = (minutes < 10) ? "0" + minutes : minutes;
    const sec = (seconds < 10) ? "0" + seconds : seconds;
    const ms = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
    return `${min}:${sec}:${ms}`
  }
  
  function updateTime(){
    if(!paused){
      const curTime = new Date().getTime();
      const difference = curTime - startTime;
      const timeRemaining = preciseTimerSetting - difference;

      savedTime = difference;

      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000*60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      const milliseconds = Math.floor((timeRemaining % (1000* 60)) /100);
      //how do I get the savedTime out of this function? 

      printDisplay(toHumanReadableTime(minutes, seconds, milliseconds))
    }
  }
}