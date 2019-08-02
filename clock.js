console.log("Working");
let whiteTimeLeft = 300;
let blackTimeLeft = 300;
let whiteMove = true;
let blackMove = false;
let paused = true;
let whiteMinutes = whiteTimeLeft/60;
let whiteSeconds = whiteTimeLeft % 60;
let blackMinutes = whiteTimeLeft/60;
let blackSeconds = whiteTimeLeft % 60;
let whiteFraction = whiteTimeLeft % 600;
let blackFraction = blackTimeLeft % 600;

document.getElementById("white-minutes").innerHTML = parseInt(whiteMinutes);
document.getElementById("white-seconds").innerHTML = parseInt(whiteSeconds);
document.getElementById("black-minutes").innerHTML = parseInt(blackMinutes);
//add ability to see two zeros here
document.getElementById("black-seconds").innerHTML = parseInt(blackSeconds);




window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
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

setInterval(decreaser, 1000);


function decreaser(){

    if (!paused){

    
        if(whiteMove){
            if(whiteTimeLeft > 0){
                console.log("white time left is " + whiteTimeLeft);
                //document.getElementById("first").innerHTML = parseInt(whiteTimeLeft);
                //document.getElementById("first").innerHTML = parseInt(whiteMinutes);

                whiteMinutes = whiteTimeLeft/60;
                whiteSeconds = whiteTimeLeft % 60;

                document.getElementById("white-minutes").innerHTML = parseInt(whiteMinutes);
                document.getElementById("white-seconds").innerHTML = parseInt(whiteSeconds);

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


