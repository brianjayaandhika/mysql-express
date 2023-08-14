import "dotenv/config";

import express from "express";
import cors from "cors";

import db from "./database/db.js";
import movieRouter from "./routes/movieRouter.js";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

db.sync()
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("Failed to connect!");
  });

app.use("/movies", movieRouter);

app.get("/testmovie", (req, res) => {
  res.send("MASOOOK");
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "API not found",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
