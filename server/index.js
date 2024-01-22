import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import data from "./data/data.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.status(200).json("hello there");
});
app.get("/sample", (req, res) => {
  res.status(200).json({ data });
});
app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
