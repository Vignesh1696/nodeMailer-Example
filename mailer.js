const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


const env = {
  SMTP_HOST: '*********',
  SMTP_PORT: 587,
  SMTP_AUTH_USER: '*******',
  SMTP_AUTH_PASS: '******',
  SMTP_FROM: '**********'
}

const transporter = nodemailer.createTransport(smtpTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    user: env.SMTP_AUTH_USER,
    pass: env.SMTP_AUTH_PASS
  }
}));

function mailSending() {
  var msg = {
    html: "<b>Hello viki!</b><p>hiiii</p>.",
    createTextFromHtml: true,
    from: env.SMTP_FROM,
    to: "viki.16@gmail.com",
    subject: "Nodemail Credentials"
  };
  transporter.sendMail(msg, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + JSON.stringify(info));

    }
  });
}
mailSending();