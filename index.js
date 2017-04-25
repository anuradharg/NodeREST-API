const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//const routes = require('./routes/api'); //cleaned up

//set up express app
const app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

//Static files
app.use(express.static('public'));

//Use body parser for processing POST requests
app.use(bodyParser.json());

//Initialise routes
//app.use(routes);

//to append "api" after localhost- localhost:4000/api/ninjas
//app.use("/api",routes); //commented after line-3 cleanup
app.use("/api", require('./routes/api'));

//error-handling middleware
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message, message: err.errors.name.message});
});

//listen to requests
app.listen(process.env.port || 4000,function(){
  console.log('Server is listening at port 4000...');
});
