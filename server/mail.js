 
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
 
const app = express(); 
 
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var stringify = require('json-stringify');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(express.static(DIST_DIR),function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var smtpTransport = nodemailer.createTransport({
service: 'Gmail',
host: 'smtp.gmail.com',
port:587,
secure: false,
  auth: {
  user: 'joc4911@gmail.com',
  pass: 'Foutaise.1'
   }
});


app.post('/sendmail',(req, res) => {
    console.log(req);
  let to_email = req.body.email;
  let mail_subject = req.body.mail_subject;
  let message = req.body.lname;
  let attach = req.body.attach;


  let mailOptions = {
      from: 'Learn Infinity <learninfinity2017@gmail.com>',
      to: to_email,
      subject: "Tu as un message !",     
      html: "message"
  };

  smtpTransport.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(info);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 
});

console.log(smtpTransport);