/* LAB 7-1 - FINAL COUNTDOWN!! */
//alert("Lab 7 - 1");//Please delete once you have confirmed your page is connected...seriously, if I see this popup when I check out your work, I will go coo-coo bananas.

//create page load listener
window.onload = pageReady;

//create page load function
function pageReady(){
    //alert("All loaded now!");

	//create variables for required HTML elements
    var dateTodayElement = document.getElementById("todayData");
    var dateDeadlineElement = document.getElementById("finalData");
    var dateDiffElement = document.getElementById("dueData");
	
	//create variables for now date and due date
    var now = new Date(); //fetches the current time and date.
    var date1970 = now.getTime(); //number of milliseconds since Jan 1 1970 and now.
    var dueDate = new Date(2020, 11, 16, 23, 59, 0, 0); //var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    var dueDateMS = dueDate.getTime();
    //console.log(dueDate);
	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
    var timeDifference = dueDateMS - date1970;
    var msecInADay = 86400000;
    var days = timeDifference/msecInADay;
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
    var days = Math.floor(days);
    
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
    dateTodayElement.innerHTML = now.toDateString();
    dateDeadlineElement.innerHTML = dueDate.toDateString();
	
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
    if (days<0) {
        dateDiffElement.innerHTML = "Deadline has passed";
    }
    else {
        dateDiffElement.innerHTML = days ;
    }
    
    
}