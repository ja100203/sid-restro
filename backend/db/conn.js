const mongoose=require("mongoose");



const connectToDatabase = mongoose.connect(process.env.MONGO_URI, {
      }).then(()=> console.log("Connected to the MongoDB database successfully")).catch((error)=> console.error("Error connecting to MongoDB:", error));   
  
module.exports = connectToDatabase;