const mongoose=require("mongoose");

const mongoUrl = 'mongodb://127.0.0.1:27017/Restaurant';


async function connectToDatabase() {
    try {
      await mongoose.connect(mongoUrl, {
        useUnifiedTopology: true
      });
      console.log("Connected to the MongoDB database successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
  
  connectToDatabase();