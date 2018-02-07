const http = require("http");
 const PORTONE = 7000;
 const PORTTWO = 7500;

 function handleRequestOne(request, response) {
 	response.end("You are so smart.");
}
 function handleRequestTwo(request, response) {
 	response.end("You're not too sharp.");
 }
 
 const serverOne = http.createServer(handleRequestOne);
 serverOne.listen(PORTONE, function() {
 	console.log("Server listening on: http://localhost" + PORTONE);
 })

 const serverTwo = http.createServer(handleRequestTwo);
 serverTwo.listen(PORTTWO, function() {
 	console.log("Server listening on: http://localhost" + PORTTWO);
 })