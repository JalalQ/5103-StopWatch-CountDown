/* LAB 7.2 - STOP TIME */
//alert("Lab 2 is connected");//delete once confirming your page is connected. 

//create page load listener
window.onload = pageReady;

//create page load function
function pageReady(){
    
	//create variables for required HTML elements
    var hourElement = document.getElementById("hoursOut");
    var minElement = document.getElementById("minsOut");
    var secElement = document.getElementById("secsOut");
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    
	//create time variable so all functions have access to it
    
	//CREATE FUNCTION THAT DISPLAYS THE TIME
    function displayTime() {
        var today = new Date();
        
        //gathers information about current hour, min and sec. 
        //Add zero at the head if it is a single digit number.
        var currentHour = addZero(today.getHours());
        var currentMin = addZero(today.getMinutes());
        var currentSec = addZero(today.getSeconds());
        
        // for formatting the display.
        hourElement.innerHTML = currentHour + ":";
        minElement.innerHTML = currentMin + ":";
        secElement.innerHTML = currentSec;
    }

	//CREATE FUNCTION TO START THE CLOCK.
	var timer; //we need to acces the timer variable outside the function scope.
    
    function startClock() {  
        timer = setInterval(displayTime, 500);    
    }
    
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock() {
        clearInterval(timer);    
    }
    
	// SET EVENT LISTENERS
    btnStart.onclick = startClock;
    btnStop.onclick = stopClock;
    
    
    // BONUS ACTIVITY
    function addZero(j) {
        if (j<10) {
            j = "0" + j;
        }
        return j;
    }
            
    
}