const nodemailer = require("nodemailer");

async function sendEmail(from: string, email: string, message: string) {
  let transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
  });
  await transporter.sendMail({
    from: '"Your Wedding Robot" <thisiswhaticouldthinkof@outlook.com>', // sender address
    to: "sydneykorywedding@gmail.com",
    subject: `🤖 New Wedding Message from ${from} at ${email} 🤖`,
    text: message,
    html: message,
  });
}

export { sendEmail };
