import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute  from "./routes/users.js"
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


// middleware
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

<<<<<<< HEAD
app.use((err, req, res, next) => {
 const errorStatus = err.status || 500;
 const errorMessage = err.message || "Something ent wrong";
 return res.status(errorStatus).json({
  success: false,
  status: errorMessage,
  stack: err.stack,
 });
})

=======
>>>>>>> 825a2f5ea7a06c8bae89ca5c0feae1bd37214d29
app.listen(8000, () => {
  connect();
  console.log("Connected to backend");
});
