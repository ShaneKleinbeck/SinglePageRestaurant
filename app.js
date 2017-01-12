'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

// Index Page
app.route('/')
  .get(function(req, res){
    res.render('index.html');
  });

// Set Local Server
app.listen(process.env.PORT || 8000);

console.log('8000 CONNECTED');