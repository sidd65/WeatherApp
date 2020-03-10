const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const hbs = require('hbs');
const filePath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(filePath));

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Weather',
        name: 'Andrew Meads',
        message: 'hello there~'
    })
})
app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Bindu',
        name: 'Andrew Mead'
    })
})

app.get('/weather',(req,res)=>{
    if (!req.query.address) {
        res.send({
            error:'Please provide search string!'
        })
        return;
    }
   geocode(req.query.address,(error,data)=>{
       let lat = data.lat;
       let long = data.long;
       forecast(lat, long,(error,data)=>{
           res.send({
               currently: data
           })
       });
   });
})

app.get('/help', (req, res)=>{
    res.send('<h1>Hello Bindu!dd2</h1>');
})
app.get('/help/*',(req, res)=>{
    res.render('error',{
        title:'help Page not found!'
    })
})
app.get('*',(req, res)=>{
    res.render('error',{
        title:'Page not found!'
    })
})

app.listen(port,()=>{
    console.log('Server is ready!');
    
});