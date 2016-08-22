const readline = require('readline');
var request = require('request');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Would you like to sign in to Medium? ', (answer) => {
  // TODO: Log the answer in a database
  if(answer == "yes") {
  	request.get("https://www.github.com").auth('robocopkaka', 'Jessica1',  false)
  	
  }
  console.log('Thank you for your valuable feedback:', answer);

  rl.close();
});