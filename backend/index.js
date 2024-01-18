import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/userRoutes.js";
import adminRoute from "./routes/adminRoutes.js";
dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("API is working");
  res.end();
});

const port = process.env.PORT || 8080;

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB connection failed ", err);
  }
};

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRoute);
app.use("/users", userRoute);
app.use("/admins", adminRoute);
app.listen(port, () => {
  connect();
  console.log("server started on port ", port);
});
