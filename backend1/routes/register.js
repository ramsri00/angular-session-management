const express=require('express');
const router=express.Router();
const { users } = require('../models/model');
const Bcrypt = require('bcryptjs');
const nodemailer= require('nodemailer');
const environment = require('./environment');
const Emailtemplate = require('email-templates').EmailTemplate;
const Promise=require('bluebird');
const path = require('path');
//creating email with template
var Handlebars = require('handlebars');
// var fs = require('fs');




//open file template
// var source = fs.readFileSync(path.join(__dirname, '../templates/index.hbs'), 'utf8');


// console.log('Source', source);



//function load template

  
//generating email
// var template = Handlebars.compile(source);
// var template= sourcele
// let dataJson=req;

// // let firstName;
// let users1=[
// {
//   firstName:dataJson.firstName
// },
// {
//   email:dataJson.email
// }
// ];

// router.post('/sendEmail', (req, res) => {
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'xxxxx@gmail.com',
//       pass: 'xxxxxxxxxxxxx'
//     }
//   });
 
// });
 
// function sendEmail(obj){
//   return transporter.sendMail(obj)
// }

function loadTemplate(templateName,contexts){
let template = new Emailtemplate(path.join(__dirname,'templates',templateName));
return Promise.all(contexts.map((context)=>{
  return new Promise((resolve, reject)=>{
    template.render(context,(err,result)=>{
     if(err) reject(err);
     else resolve({
       email:result,
       context,
     });
    } );
  });
}));
}

// loadTemplate('template',users1).then((results)=>
// {
//  return Promise.all(results.map((result)=>{
//    sendMail({
//     from: '"Ruah Team" <msraminbox1@gmail.com>',
//     to: result.context.email,
//     subject: result.subject.email,
//     text: result.text.email,
//     html: result.html.email,
//    });
//  }));
// }).then(()=>{
//   console.log('message sent');
// });

router.post('',async(req,res)=>{
  let dataJson = req.body;
  console.log('DataJson', dataJson);
  hashValue = Bcrypt.hashSync(dataJson.password, Bcrypt.genSaltSync(10));


  let users1=[
{
  firstName:dataJson.firstName, email:dataJson.email
}
];

console.log('yaay,users1',users1);

    users.findOne({firstName:req.body.firstName}).then(response=>{
        console.log('findOne',response);
  
        if (response) {
            console.log(response.email);
    
            console.log('emailId already exists');
            return res.json({ msg: 'emailIdexists' });
         }
          if (!response) {
            const newUser = new users({
             
              firstName: dataJson.firstName,
              lastName: dataJson.lastName,
              email: dataJson.email,
              mobileNumber: dataJson.mobileNumber,
              password: hashValue,
            });
            newUser
              .save()
              .then(responseData => {

            console.log(responseData);
              }).catch(err => {
                console.log(err)
              });
             var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                  user: 'msraminbox1@gmail.com',
                  pass: environment.password
                }
              });

              loadTemplate('template',users1).then( results =>
                {
                 return Promise.all(results.map((result)=> {
                  transporter.sendMail({
                    from: '"Ruah Team" <msraminbox1@gmail.com>',
                    to: 'srirammk1998@gmail.com',
                    subject: result.email.subject,
                    text: result.email.text,
                    html: result.email.html,
                   });
                 }));
              });              
                // let mailOptions={
                //   from: '"Ruah Team" <msraminbox1@gmail.com>',
                //   to: dataJson.email,
                //   subject: subject.hbs,
                //   text: text.hbs,
                //   html: template,
                 //template:'index'
              // },
                
                // transporter.sendMail(loadTemplate, (error, info) => {
                //   if(error) {
                //     return console.log(error);
                //   }
                //   console.log('Message sent');
                // }).catch(err => {
                //   console.log(err);
                 
                // });
          //       console.log(responseData);
          //       res.status(200).json({
          //         msg: 'success',
          //         response: responseData
          //       });
          //     });
          //   }
          // })
          
        }
    
              
              });
            
    });                     
module.exports=router;
