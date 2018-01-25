
var strava = require('strava-v3');

strava.athletes.stats({ 'id': 169710 }, function(err, payload) {
    if (!err) {          
	//console.log(payload);

	console.log(payload.ytd_run_totals);
	console.log(payload.ytd_run_totals.distance/1000);


    }   
    else {
	console.log("ERROR:");
        console.log(err);
    }
});

