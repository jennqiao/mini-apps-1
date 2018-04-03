var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
// var Promise = require('bluebird');
// var fs = Promise.promisifyAll(require('fs')); 
var fs = require('fs');

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

app.post('/', function(req, res) {

  var data = JSON.parse(req.body.result);

  handleReq(data, function(csv) {
      res.send(JSON.stringify(csv));
  });

})

function handleReq(data, callback) {

  var headers = [];
  var content = [];

  for (var key in data) {
    if (key !== 'children') {
      headers.push(key);
    }
  }

  function addToCSV(obj) {
    var row = [];
    for (var i=0; i<headers.length; i++) {
      row.push(obj[headers[i]]);
    }
    content.push(row);
    if (obj['children']) {

      for (var i=0; i<obj['children'].length; i++) {
        addToCSV(obj['children'][i]);
      }
    }
  }

  addToCSV(data);


  var string = headers.join(',') + '\n';
  for (var i=0; i<content.length; i++) {
    content[i] = content[i].join(',');
  }
  string += content.join('\n');

  callback(string);


  //  fs.writeFile('./samples/report.csv', string, 'utf8', function(err) {
  //   if (err) {
  //     console.log('error',err);
  //   } else {
  //     console.log('written!');
  //   }
  // })



}



