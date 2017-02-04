var finalDate = 'February 28 2017 6:00:00 GMT+1300';

//get difference 
function timeDifference(finalDate) {
	//difference in milliseconds
	var currentDate = new Date();

	var difference = Date.parse(finalDate) - Date.parse(currentDate);

	var seconds = difference / 1000;
	var leftOverSeconds = Math.floor(seconds % 60);

	var minutes = seconds / 60;
	var leftOverMinutes = Math.floor(minutes % 60);

	var hours = minutes / 60;
	var leftOverHours = Math.floor(hours % 24);

	var days = Math.floor(hours / 24);

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

    clock.innerHTML = 'hey mark <br>' + "<br>" + 
    					'there\'s only <br>' +
    					timeRemaining.days + ' days<br>' +
                      timeRemaining.hours + ' hours <br>' +
                      timeRemaining.minutes + ' minutes <br>' +
                      'and ' + timeRemaining.seconds +' seconds <br>' + 
                      'until i see you again :)';
    if(timeRemaining.total <= 0){
      clearInterval(timeinterval);
    }
  }, 1000);
}

window.onload = function(){  

	initializeClock("clock", finalDate);
}


//update difference every second