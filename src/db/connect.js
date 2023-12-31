import mongoose from "mongoose";
import config from "config";
import log from "../logger/index.js";

function connect() {
  const dbUri = config.get("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}

export default connect;
