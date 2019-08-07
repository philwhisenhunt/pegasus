let whiteTimeLeft = 300;
let blackTimeLeft = 300;
let whiteMove = true;
let blackMove = false;
let paused = false;
let whiteMinutes = whiteTimeLeft/60;
let whiteSeconds = whiteTimeLeft % 60;
let blackMinutes = whiteTimeLeft/60;
let blackSeconds = whiteTimeLeft % 60;
let whiteFraction = whiteTimeLeft % 600;
let blackFraction = blackTimeLeft % 600;

let countdownDisplayer1 = document.querySelector('#first');
let startTime1 = new Date().getTime();

 

// document.getElementById("white-minutes").innerHTML = parseInt(whiteMinutes);
// document.getElementById("white-seconds").innerHTML = parseInt(whiteSeconds);
// document.getElementById("black-minutes").innerHTML = parseInt(blackMinutes);
// //add ability to see two zeros here
// document.getElementById("black-seconds").innerHTML = parseInt(blackSeconds);

//add ability to toggle time
//document.addEventListener("white-time-arrow-up", function())//continue here

// startButton = document.querySelector('.all');


window.addEventListener('keydown', function(e) {
    //if the spacebar is pressed
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
      startButton.style.background = "red";
      if (e.keyCode == 32) {
        if(blackMove){
            whiteMove = true;
            blackMove = false;
        }
        else{
            
            blackMove = true;
            whiteMove = false;
        }

      }
    }
}
  );   


window.addEventListener('keydown', function(e){
    //if the p key is pressed
    if(e.keyCode == 80 &&e.target == this.document.body){
        e.preventDefault();
        if (e.keyCode == 80 && !paused){
            paused = true;

        }
        else{
            paused = false;
        }
    }
})

//  setInterval(startDecreaser, 1000);


function startDecreaser(){
    console.log("working");

    if (!paused){
        console.log("Not paused");

    
        if(whiteMove){
            if(whiteTimeLeft > 0){
                console.log("white time left is " + whiteTimeLeft);
                //document.getElementById("first").innerHTML = parseInt(whiteTimeLeft);
                //document.getElementById("first").innerHTML = parseInt(whiteMinutes);

                whiteMinutes = whiteTimeLeft/60;
                whiteSeconds = whiteTimeLeft % 60;

                // document.getElementById("white-minutes").innerHTML = parseInt(whiteMinutes);
                // document.getElementById("white-seconds").innerHTML = parseInt(whiteSeconds);

                whiteTimeLeft--;
                
        
            }
            else{
                whiteMove=false;
                document.getElementById("first").innerHTML = parseInt(0);
            }
        }
        
        if(blackMove){
            if(blackTimeLeft > 0){
                //console.log(blackTimeLeft);
               // document.getElementById("second").innerHTML = parseInt(blackTimeLeft);

                blackMinutes = blackTimeLeft/60;
                blackSeconds = blackTimeLeft % 60;

                document.getElementById("black-minutes").innerHTML = parseInt(blackMinutes);
                document.getElementById("black-seconds").innerHTML = parseInt(blackSeconds);
               
                blackTimeLeft--;

            }
            else{
                blackMove = false;
                document.getElementById("second").innerHTML = "Game Overz";
            }
        }
        // console.log("Whitemove is " + whiteMove);
        // console.log("blackMove is " + blackMove);

        if(!paused && !whiteMove && !blackMove){
            document.getElementById("first").innerHTML = "0:00";
            document.getElementById("second").innerHTML = "0:00";
        }
            
        
    
    
    
    }
}

function getDisplayTime1(){
    updatedTime1 = new Date().getTime();

    //this will need to go in an else statement
    difference1 = startTime1 - updatedTime1;

    let hours1 = Math.floor((difference1 % (1000*60*60*24)) / (1000*60*60));
    let minutes1 = Math.floor((difference1 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds1 = Math.floor((difference1 % (1000 * 60)) / 1000);
    let milliseconds1 = Math.floor(difference1 % (1000 * 60)) / 100;
    hours1 = (hours1 < 10) ? "z" + hours1 : hours1;
    minutes1 = (minutes1 < 10) ? "0" + minutes1 : minutes1;
    seconds1 = (seconds1 < 10) ? "0" + seconds1 : seconds1;
    milliseconds1 = (milliseconds1 < 100 ) ? (milliseconds1 < 10 ) ? "00" + milliseconds1 : "0" + milliseconds1 : milliseconds1;
    countdownDisplayer1.innerHTML = hours1 + '::' + minutes1 + ':' + seconds1 + ':' + milliseconds1;
}
console.log('here');
getDisplayTime1();


