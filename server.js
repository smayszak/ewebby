const PORT = 5000;

var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello From Cloud9!');
});
 
var port = Number(process.env.PORT || PORT);
app.listen(port);
 
console.log(`Server is listening on ${PORT}`);
