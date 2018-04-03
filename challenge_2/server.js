var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');

var app = express();

// app.get('/', function(req, res) {
//   res.send('hello world!');
// })

app.listen(3000, function() {
  console.log('Listening on port 3000 now');
});

app.use(morgan('dev'));
app.use(parser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('client'));




