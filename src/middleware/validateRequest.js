import pkg from "yup";
const { AnySchema } = pkg;
import log from "../logger/index.js";

const validate = (schema) => async (req, res, next) => {
  console.log("Making request");
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    return next();
  } catch (e) {
    // log.error(e);
    // return res.status(400).send(e.errors);
    log.error(e);
    return res.status(400).send(e.message);
  }
};

export default validate;
