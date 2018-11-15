const request 	= require('request');

var geoCodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
		url: `http://www.mapquestapi.com/geocoding/v1/address?key=Yzb1djeq26IvaScB9yefdYHAEOyukanH&location=${encodedAddress}`,
		json: true
	}, (error, response, body) => {

		if (error) {
			callback('Unable to connect to Google servers.');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address.');
		} else if (body.info.statuscode === 0) {
			callback(
				undefined, 
				body.results[0].locations[0]
			)
		}
	});	
}

module.exports = { geoCodeAddress }