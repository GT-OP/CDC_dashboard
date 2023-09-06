import express from "express";
import config from "config";
import routes from "./router.js";
import connect from "./db/connect.js";
import log from "./logger/index.js";
import cors from "cors";
import { deserializeUser } from "./middleware/index.js";

const port = config.get("port");

const app = express();
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],
};

app.use(cors(corsOpts));
app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  log.info(`Server listing at ${port}`);

  connect();

  routes(app);
});
