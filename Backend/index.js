import express from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";
const app = express();

import bookRoute from "./route/book.route.js";

dotenv.config();
const PORT = process.env.PORT || 4000 // 4000;
const URI = process.env.MongoDBURI;


// connect to momgodb
try{
  mongoose.connect(URI,{
  });
  console.log("Connected to mongoDB");
}catch(error){
  console.log("Error:",error);
}

// defining routes
app.use("/book",bookRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
