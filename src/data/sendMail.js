var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

var transport =({
    host: "Smtp.gmail.com", //replace with your email provider
    port: 587,
    auth: {
      user: "ludovickBusiness@gmail.com", //replace with the email address
      pass: "T3ntacle4boveFivePercent" //replace with the password
    }
  });

  var transporter = nodemailer.createTransport(transport)

  // verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
    var mail = {
      from: name,
      to: 'ludovickbusiness@gmail.com',
      subject: `Nouveau message de ${name}`,
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use('/', router)
  app.listen(3002) 