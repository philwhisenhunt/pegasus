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

function oldCountdown(){


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
    if(savedTime1){
        difference1 = (updatedTime1 - startTime1) - savedTime1;
    } else {
        difference1 = (updatedTime1 - startTime1);
    

    let hours1 = Math.floor((difference1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    let minutes1 = Math.floor((difference1 % (1000 * 60 * 60)) / (1000 * 60));
    console.log("minutes allowed: " + initialMinutesAllowed);
    console.log("minutes1: " + minutes1);

    let subtractedMinutes1 = Math.ceil(initialMinutesAllowed - minutes1);

    1;
    let seconds1 = Math.floor((difference1 % (1000 * 60)) / 1000);
    let subtractedSeconds1 = Math.floor((initialSecondsAllowed - seconds1) % (60));
    
    let milliseconds1 = Math.floor(difference1 % (1000 * 60)) / 100;
    //let subtractedMilliseconds1 = Math.floor((initialSecondsAllowed - seconds1) % (60));

    hours1 = (hours1 < 10) ? "0" + hours1 : hours1;
    minutes1 = (minutes1 < 10) ? "0" + minutes1 : minutes1;
    seconds1 = (seconds1 < 10) ? "0" + seconds1 : seconds1;
    milliseconds1 = (milliseconds1 < 100 ) ? (milliseconds1 < 10 ) ? "00" + milliseconds1 : "0" + milliseconds1 : milliseconds1;
    // countdownDisplayer1.innerHTML = hours1 + ':' + minutes1 + ':' + seconds1 + ':' + milliseconds1;
    countdownDisplayer1.innerHTML = hours1 + ':' + subtractedMinutes1 + ':' + subtractedSeconds1    ;

    }
}