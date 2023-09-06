import pkg from "lodash";
const { omit } = pkg;

import { createUser } from "../service/user.service.js";

export async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e) {
    // log.error(e);
    return res.status(409).send(e.message);
  }
}
