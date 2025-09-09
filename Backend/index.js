import express from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import cors from "cors";
const app = express();

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000 // 4000;
const URI = process.env.MongoDBURI;


// connect to momgodb
try{
  mongoose.connect(URI);
  console.log("Connected to mongoDB");
}catch(error){
  console.log("Error:",error);
}

// defining routes
app.use("/book",bookRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
