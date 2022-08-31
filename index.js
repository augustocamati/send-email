require('dotenv').config()
const nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
   
    auth: {
      user: "augustocamati21@gmail.com",
      pass: "Augustoac", 
    },
  });

  let info = await transporter.sendMail({
    from: "Augusto Camati (CoffeeCode) 👻 <augustocamati21@gmail.com>", 
    to: "augustocamati21@hotmail.com", // Pode ser varios emails separados por virgulas
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<h1>Hello world?</h1>", 
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
}

main().catch(console.error);
