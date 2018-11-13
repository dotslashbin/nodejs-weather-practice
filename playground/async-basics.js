console.log("Starting app"); 	

setTimeout(() => {
	console.log("Inside the callback function")
}, 2000); 

setTimeout(() => {
	console.log("Inside the second")
}, 0); 

console.log("Finishing app"); 