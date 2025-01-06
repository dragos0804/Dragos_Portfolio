import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your password or app-specific password
      },
    });

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Portfolio Contact Form" <your-email@gmail.com>', // sender address
        to: "dragospaul120@gmail.com", // list of receivers
        subject: "New Contact Form Submission", // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`, // html body
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

