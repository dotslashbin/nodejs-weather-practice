const request 	= require('request');
const yargs 	= require('yargs');
const geocode 	= require('./geocode/geocode.js'); 
const weather	= require('./weather/weather.js'); 

const argv = yargs
  .options({
		a: {
		  demand: true,
		  alias: 'address',
		  describe: 'Address to fetch weather for',
		  string: true
		}
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geoCodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
  	} else {

    	// Call to weather method
    	weather.getWeather(results.latLng.lat, results.latLng.lng, (errorMessage, weatherResults) => {
			if (errorMessage) {
		        console.log(errorMessage);
		    } else {
		    	// Pretend there was nothing wrongs
		        console.log(weatherResults)
		    }
    	})
  	}
});