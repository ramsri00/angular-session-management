
//server.js
const express = require('express');
const app = express();
const cors = require('cors');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const nodemailer= require('nodemailer');
//const handlebars=require('nodemailer-express-handlebars');




const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(bodyParser.json({ limit: '500mb' }));
const dbConfig = require('./config/mongodb.config');


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose
  .connect(dbConfig.url, { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
  });

mongoose.set('useCreateIndex', true);

app.use(cors());

//Routes
app.use('/api/register', registerRoutes);
app.use('/api/login',loginRoutes);
// Create a Server
const server = app.listen(8080, function() {
    let host = server.address().address;
    let port = server.address().port;
  
    console.log('App listening at http://%s:%s', host, port);
  });
  