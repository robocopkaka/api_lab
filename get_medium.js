function getMedium(){
	
	const readline = require('readline');
	var request = require('request');
	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});
	this.getUserDetails = function(){
		rl.question('Would you like to view your medium details? ', (answer) => {
			request({
		    url: 'https://api.medium.com/v1/me', //URL to hit
		    method: 'GET', //Specify the method
		    headers: { //We can define headers too
		        'Authorization': 'Bearer 2e5cdee128202fa37fd4f37ba3308a3ff277ac5d4ceb256df2e151b20a14f3278'
		    }
		}, function(error, response, body){
		    if(error) {
		        console.log(error);
		    } else {
		        console.log(response.statusCode, body);
		    }
		});


		console.log('Thank you for your valuable feedback:', answer);
		rl.close();
	  });
 }
}

var user = new getMedium();
user.getUserDetails();