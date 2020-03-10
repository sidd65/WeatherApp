const request = require('request');

const geocode = (address='',callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2lkaHUxMjMiLCJhIjoiY2s3OHAzN2JnMGkybTNmcGo2MWc2a20wcyJ9.7PPfZp1Qo_MvUPhEiZBPHw'
    request({url:url,json: true},(error, {body})=>{        
        const lat = body.features[0].center[1];
        const long = body.features[0].center[0];
        callback(undefined,{lat,long});
    })
}

module.exports = geocode;