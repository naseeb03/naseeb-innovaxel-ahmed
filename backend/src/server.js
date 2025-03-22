import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", urlRoutes);

app.get("/", (req, res) => {
  res.send("URL Shortener API is Running");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
