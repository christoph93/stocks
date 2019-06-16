var AWS = require('aws-sdk');
var express = require('express');
var bodyParser = require('body-parser');

AWS.config.region = process.env.REGION

var app = express();

var apiKey = 'N6UZN5PBXVO599CV';

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
    res.render('index', {
        static_path: 'static',
        theme: process.env.THEME || 'flatly',
        flask_debug: process.env.FLASK_DEBUG || 'false'
    });
});


var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
    }); 

var datetime = new Date();
function updatePrices() {
    datetime = new Date();
    console.log(datetime);
}


setInterval(updatePrices, 15000);

var url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=PETR4.SAO&apikey=${apiKey}`;

console.log(url);