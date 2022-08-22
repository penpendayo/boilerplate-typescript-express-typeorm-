import express from "express";
import { createConnection } from "typeorm";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ hello: "world!!" });
});

router.get("/db-test", async (req, res, next) => {
  try {
    await createConnection();
    res.send("Successful connection to database!!🎉🎉🎉");
  } catch (error) {
    res.send("Failed to connect to database. 😭😭😭");
  }
});

export default router;
