const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    console.log("Connecting to DataBase...".yellow);
    const conn = await mongoose.connect(process.env.MONGO_URL)

    console.log(`MongoDB connected: ${conn.connection.host}`.blue);
  
  } catch (error) {
    console.log(error);
    process.exit(1);
  }


};


module.exports = connectDB;