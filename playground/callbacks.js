var getUser = (id, callback) => {
	var user = { 
		id: id,
		name: "Joshua" 
	}

	setTimeout(() => {
		callback(user); 	
	}, 3000); 
	
};

getUser(123, (userObject) => {
	console.log(userObject); 
}); 