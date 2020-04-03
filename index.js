const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Iyzipay = require('iyzipay');

app.set('port', (process.env.PORT || 8000));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    next();
});

const iyzipay = new Iyzipay({
    apiKey: 'sandbox-kItYZYkAbb0hmLBWWC9ZxE9HIEfaLPKl',
    secretKey: 'sandbox-MhaWiZK4ACp3ovrBSm3MFfUP5bnnIAKi',
    uri: 'https://sandbox-api.iyzipay.com'
});

app.post('/', function(req,res){
    iyzipay.checkoutFormInitialize.create(req.body, function (err, result) {
        console.log(err, result)
        res.send(result)    
    });
});



app.listen(app.get('port'), function() {
    console.log('Server started on: ' + app.get('port'));
  });