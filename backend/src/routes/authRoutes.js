import express from "express";

const router = express.Router();

router.post("/register", async (req, res) => {
  res.send("Register");
});

router.post("/Login", async (req, res) => {
  res.send("Login");
});

export default router;
