var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreply.meetup.app@gmail.com',
    pass: '49H6jnCPRfjt'
  },
  tls:{
    rejectUnauthorized: false
  }
});

module.exports.send = function(to, subject, text) {

    var mailOptions = {
        from: 'Meetup <noreply.meetup.app@gmail.com>',
        to: to,
        subject: subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}