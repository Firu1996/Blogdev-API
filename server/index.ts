import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
import routes from "./routes/index";
app.use("/api", routes.authRouter);

//Database
import "./config/database";

// server linstenning
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Running on PORT`, PORT);
});
