const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodemailer = require("nodemailer");
const express = require("express");
const cors = require('cors');
const config = require("./config");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transport = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: config.USER,
        pass: config.PASS
    }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Server is ready to take messages.");
    }
});

app.post('/api', (req, res) => {

    let localCompany = '';

    if (req.body.company)
        localCompany = req.body.company;
    else
        localCompany = "*no company*"

    const name = req.body.name;
    const email = req.body.email;
    const company = localCompany;
    const message = req.body.message;
    const content = `Somebody sent you a new message from the Web Portfolio Contact Form. Please find message details below. \n \nName: ${name} \nEmail: ${email} \nCompany: ${company} \n \nMessage:\n${message}`;

    const mail = {
        from: name,
        to: config.USER,
        subject: "New Message from Web Portfolio",
        text: content,
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: "Server error - message not sent",
            });
        } else {
            res.json({
                msg: "Success - message sent",
            });
        }
    });
});

app.listen(5000, () => console.log("Server is live on port 5000"));

exports.api = functions.https.onRequest(app);