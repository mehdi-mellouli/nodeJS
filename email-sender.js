const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

const mailOptions = {
  from: '',
  to: '',
  subject: 'Sending Email using Node.js',
  text: `That was great !!!!`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('something went wrong ',error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
