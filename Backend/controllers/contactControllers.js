const asyncHandler = require('express-async-handler');

const createContact = asyncHandler(async (req, res) => {
    const { name, email, message } = await req.body;

    //Check if all fields are filled
    if(!name || !email || !message) {
        return res.status(400).json({message: "All fields should be filled"})
    };

    //check the type of email
    if(typeof(email) != email){
        return res.status(400).json({ message: "The emai format is not correct"});
    }

    //Add contacts to the database
    //Send an email to me


});

module.exports = createContact;