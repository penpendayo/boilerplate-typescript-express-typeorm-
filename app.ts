import express from "express";
import path from "path";
import logger from "morgan";
import config from "config";
import indexRouter from "./routes/index";

const PORT = config.get<string>("API_PORT");
const app = express();
(async () => {
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/", indexRouter);
  await app.listen(PORT);
  console.log(`server is up and running on port ${PORT}`);
})();
