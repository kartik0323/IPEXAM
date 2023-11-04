import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import EmployeeRoute from "./Routes/EmployeeRoutes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`The localhost is listening at: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`the error is : ${err}`);
  });

app.use("/employee", EmployeeRoute);


