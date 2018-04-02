const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const uuidv4 = require('uuid/v4');

module.exports = {
    sendEmail:sendEmail
}

function sendEmail(to, subject, html){

    return new Promise((resolve, reject) => {

        nodemailer.createTestAccount((err, account) => {

            var transporter = nodemailer.createTransport(smtpTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                auth: {
                    user: 'amitdubeynodemailer@gmail.com',
                    pass: 'nodemailer'
                }
                }));

            const token = uuidv4();

            let mailOptions = {
                from: '"Admin " <amitdubeynodemailer@gmail.com>',
                to: to,
                subject: subject,
                html: html 
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(false);
                }
                else{
                    resolve(true);
                }
            });
        });

    });
}
