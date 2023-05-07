


const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

const Message = require('../models/Message');
router.post('/',async (req, res) => {

try {
console.log(req.body)

const single = new Message(req.body);
let saved = await single.save();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dev.moshiurr@gmail.com',
      pass: 'bfwppeclhejetrap'
    }
  });
  
  const mailOptions = {
    from: 'dev.moshiurr@gmail.com',
    to: 'dev.moshiurr@gmail.com',
    subject: `Message from ${req.body.appName || 'unknown app'}`,
    html: `
    <div>
    <p>${req.body.name || 'unknwon'} from ${req.body.email || 'unknwon'} email and ${req.body.phone || 'unknwon'} number</p>
    <p>Address :  ${req.body.address || 'unknwon'} </p>
    <br/>
    <br/>
    <i>
    ${req.body.message}</i>
    </div>`,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).json(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });



res.status(200).json(' Has Been Added');
} catch (error) {
res.status(500).json(error);
}
});

module.exports = router;

