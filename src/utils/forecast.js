const request = require('request');
 const forecast = (lat, long,callback) =>{
    const url = `https://api.darksky.net/forecast/cff2109deae05b6c04a953f0a1946626/${lat},${long}`
    request({url,json: true},(error, { body })=>{
        callback(undefined,body.currently)
    })
 }
 module.exports = forecast;