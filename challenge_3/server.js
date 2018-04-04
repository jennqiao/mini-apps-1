var express = require ('express');
var morgan = require('morgan');
var parser = require('body-parser');

var app = express();


app.use(morgan('dev'));
app.use(parser.json());

app.listen(3000, function() {
  console.log('connected and listening to port 3000');
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.static('client'));

