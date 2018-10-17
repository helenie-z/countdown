//var finalDate = 'March 5 2017 18:00:00 GMT+1300';
var anniversary = 'December 2 2016 1:00:00 GMT+1300';
var finalDate = 'November 23 2018 10:00:00 GMT+1300';
var alertDone = false;
//get difference 
function timeDifference(date) {
	//difference in milliseconds
	var currentDate = new Date();

	var difference = Date.parse(date) - Date.parse(currentDate);

	var seconds = difference / 1000;
	var leftOverSeconds = Math.abs(Math.floor(seconds % 60));
	//alert(leftOverSeconds + 1);

	var minutes = seconds / 60;
	var leftOverMinutes = Math.abs(Math.floor(minutes % 60));

	var hours = minutes / 60;
	var leftOverHours = Math.abs(Math.floor(hours % 24));

	var days = Math.abs(Math.floor(hours / 24));
	alertDay = days;

	return {
		'total': difference,
		'days': days,
		'hours': leftOverHours,
		'minutes': leftOverMinutes,
		'seconds': leftOverSeconds
	};
}

//display difference
function initializeClock(id, finalDate){
  var clock = document.getElementById("clock");

  var timeinterval = setInterval(function(){
    var timeRemaining = timeDifference(finalDate);
    var anniversaryTimeRemaining = timeDifference(anniversary);

    
    if (!alertDone) {
    	alert("OMG ONLY " + timeRemaining.days + " DAYS AND I CAN'T WAIT TO SEE YOU");
    	alertDone = true;
    }
    
    
    clock.innerHTML = 

    'hey kittie! <br>' + "<br>" + 
    
    					'there\'s only ' + 
    					Math.abs(timeRemaining.days) + ' days <br>' +
                      timeRemaining.hours + ' hours <br>' +
                      timeRemaining.minutes + ' minutes <br>' +
                      'and ' + timeRemaining.seconds +' seconds until i see you again! <br>' + '<br>' + 
                      
  						'and ' +
    
  						anniversaryTimeRemaining.days + ' days<br>' +
                      anniversaryTimeRemaining.hours + ' hours <br>' +
                      anniversaryTimeRemaining.minutes + ' minutes <br>' +
                      'and ' + anniversaryTimeRemaining.seconds +' seconds since we have been together :D <br>' + '<br>'+ 

                      'love from excited cookie <3' ;

    

    //for anniversary
    /*
    clock.innerHTML = 

    'hey mark <br>' + "<br>" + 
    
              'WE HAVE BEEN TOGETHER FOR ' +  anniversaryTimeRemaining.days + ' DAYS <br>' +
                      anniversaryTimeRemaining.hours + ' HOURS <br>' +
                      anniversaryTimeRemaining.minutes + ' MINUTES <br>' +
                      'and ' + anniversaryTimeRemaining.seconds +' SECONDS :D';
    /*
    if(timeRemaining.total <= 0){
      clearInterval(timeinterval);
    } */
  }, 1000);

}

window.onload = function(){  
	initializeClock("clock", finalDate);

}


//update difference every second