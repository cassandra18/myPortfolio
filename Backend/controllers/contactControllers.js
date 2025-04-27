const asyncHandler = require('express-async-handler');
const ContactForm = require("../contactSchema");
const nodemailer = require("nodemailer");
const validator = require('validator');



const createContact = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    //Validation of required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields should be filled" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    //validate if the message is a string and it does not exceed 1000 characters
    if (typeof message !== "string") {
      return res.status(400).json({ error: "Invalid message format" });
    }

    try {
    const newForm  = await ContactForm.create({
      name, email, message
    });

    if (newForm) {
      // Send confirmation email
      await sendEmail(name, email, message);
      return res.status(200).json({ message: 'Form submitted succesfully'});
    } else {
      return res.status(500).json({ error: 'Failed to create form'});
    }
    } catch (error) {
      console.error('Error creating form:', error);
      return res.status(500).json({ message:'Internal server error'})
    }
});

// Function to send email
const sendEmail = async (name, email, message) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"Cassy's Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: "New Form Submission",
            text: `\n Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Error sending email");
    }
};


module.exports = createContact;