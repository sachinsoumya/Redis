const mongoose = require("mongoose");


const connectDB = async ()=>{

    await mongoose.connect("mongodb+srv://Sachin:Sachin123@cluster0.uevtgld.mongodb.net/Redis");
}

connectDB().then(()=>{
    console.log("MongoDb connected successfully");
}).catch((err)=>{
    console.log("Error while connecting to MongoDB" , err.message);
});

module.exports = connectDB;

