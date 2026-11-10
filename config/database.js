const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const connectDB = async ()=>{

    await mongoose.connect(`${process.env.MONGO_URL}/Redis`);
}

// connectDB().then(()=>{
//     console.log("MongoDb connected successfully");
// }).catch((err)=>{
//     console.log("Error while connecting to MongoDB" , err.message);
// });

module.exports = connectDB;

