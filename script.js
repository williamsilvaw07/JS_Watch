
function myFunction(){
    /// this stores the colors
    var newColor = ["#ee7110", "#f0b50c", "#d22929","#e34c42", "#3aa6a6","#f8f8f8"];
    
    //this will get a random number and times (x) it by the newcolor array length
   var methoods = Math.floor
(Math.random()* (newColor.length));

    
    document.body.style.backgroundColor = newColor [methoods];
}


function openNav() {
  document.getElementById("myNav").style.width = "30%";
    /////menu opening size 
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


function settime(){

var date = new Date();
var hours = date.getHours();
var min = date.getMinutes();
var seconds = date.getSeconds();
var mathTime= hours + ":"+ min + ":" + seconds;
   

document.getElementById("time_section").innerHTML = mathTime;

    
setTimeout(settime, 1000);
}



var stopHours= 00;
var stopMinutes= 00;
var stopSeconds= 00; 

var displaySeconds= 00 ;
var displayMinutes=00;
var displayHour= 00; 
var intervo= null;
var status= "stopped";




function stopwatch(){
    stopSeconds++;
    
   
    
        if (stopSeconds / 60 ===1){
       stopSeconds = 0;
        stopMinutes++;
            
            if (stopMinutes / 60 ===1){
       stopMinutes = 0;
        stopHours++;
                
        }}
    

    
    
        if (stopSeconds < 10){
        
     displaySeconds= "0" + stopSeconds.toString();
        
    }
    else{
        displaySeconds =stopSeconds;
    }
    
    
    
        if (stopMinutes < 10){
        
     displayMinutes= "0" + stopMinutes.toString();
        
    }
    else{
        displayMinutes =stopMinutes;
    }
    
        
        if (stopHours < 10){
        
     displayHour= "0" + stopHours.toString();
        
    }
    else{
        displayHour =stopHours;
    }
    
    
    
    
    document.getElementById("time").innerHTML = displayHour +":"+ displayMinutes +":"+ displaySeconds;
}



function startstop(){
    
    if (status === "Stopped"){
        
        intervo= window.setInterval(stopwatch,1000);
        document.getElementById("start-stop").innerHTML = "Stop";
    status="Stated";
    }
    
    
else {
    window.clearInterval(intervo);
     document.getElementById("start-stop").innerHTML = "Start";
    status="Stopped";
}
}



function cleardisplay(){
    
    
stopHours= 0 
    stopMinutes=0;
    stopSeconds=0;
    
 document.getElementById("time").innerHTML = "00:00:00";
}























