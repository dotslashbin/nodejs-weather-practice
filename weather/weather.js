const request = require('request');

var getWeather = (lat, lng, callback) => {
  // request({
  //   url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`,  
  //   json: true
  // }, (error, response, body) => {
  //   console.log(JSON.stringify(body, undefined, 2));
  //   debugger; 
  //   if (error) {
  //     callback('Unable to connect to Forecast.io server.');
  //   } else if (response.statusCode === 400) {
  //     callback('Unable to fetch weather.');
  //   } else if (response.statusCode === 200) {
  //     callback(undefined, {
  //       temperature: body.currently.temperature,
  //       apparentTemperature: body.currently.apparentTemperature
  //     });
  //   }
  // });
  callback(undefined, 'Nothing processed because it was a dead link')
};

var testing = () => { console.log('thisi sa test')}

// module.exports.getWeather = getWeather; 
// module.exports.getWeather = getWeather; 

module.exports = {
  getWeather, 
  testing
}
