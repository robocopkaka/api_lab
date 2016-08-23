function postToMedium(){
	
	const readline = require('readline');
	var request = require('request');
	const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});
	this.makeAPost = function(){
		rl.question('Would you like to view your medium details? ', (answer) => {
				request.post({
				    url: 'https://api.medium.com/v1/users/1b55ff57a2f0ea9780657f5da3ffd656c33480f4206c6a978846ae9c6a87ae7f6/posts', //URL to hit
				    json: {
				    "title": "Trying out Medium's API",
					"contentFormat": "html",
					"content": "<p><h1> Medium API, to be deleted after </h1></p>",
					"tags": ["api"],
			    	"publishStatus": "unlisted"},
				    headers: {
				         'Authorization': 'Bearer 2e5cdee128202fa37fd4f37ba3308a3ff277ac5d4ceb256df2e151b20a14f3278',
						'Accept-Charset': 'utf-8'
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

var user = new postToMedium();
user.makeAPost();
