const asyncHandler = require('express-async-handler');
const mysql = require('mysql2/promise');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require("nodemailer");
const validator = require('validator');


// Create a MySQL connection pool
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    connectionLimit: 10,
});


const createContact = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
    const uuid = uuidv4();

    //Validation of required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields should be filled" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    //validate if the message is a string and it does not exceed 1000 characters
    if (typeof message !== "string" || message.length > 1000) {
      return res.status(400).json({ error: "Invalid message format" });
    }

    try {
      const query = `INSERT INTO submissions (name, email, message, id) VALUES(?, ?, ?, ?)`;
      const values = [name, email, message, uuid];
      const [result] = await pool.execute(query, values);

      if (result.affectedRows > 0) {
          // Send email
          await sendEmail(name, email, message);
          res.status(200).json({ message: "Form submitted successfully" });
      } else {
          return res.status(500).json({ error: "Failed to create form" });
      }
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: error.sqlMessage });
      } else {
        console.error("Error creating form:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    }
});

// Function to send email
const sendEmail = async (name, email, message) => {
    try {
        const transporter = nodemailer.createTransport({
            services: 'gamil',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            subject: "New Form Submission",
            text: `Hello Ma'am,\n Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Error sending email");
    }
};


module.exports = createContact;