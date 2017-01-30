var express = require('express');

//Creat our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express server is up on port 3000')
});
