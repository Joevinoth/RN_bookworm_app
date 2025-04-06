import express from "express";
import "dotenv/config";

const app = express();

// const PORT = process.env.PORT;

const PORT = 3000;

console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
