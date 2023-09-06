import config from "config";
import pkg from "lodash";
const { get, omit } = pkg;

import { validatePassword } from "../service/user.service.js";
import {
  createSession,
  createAccessToken,
  updateSession,
  findSessions,
} from "../service/session.service.js";
import { sign } from "../utils/jwt.utils.js";

export async function createUserSessionHandler(req, res) {
  // validate the email and password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  // Create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // create access token
  const accessToken = createAccessToken({
    user,
    session,
  });

  // create refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"), // 1 year
  });

  // send refresh & access token back
  return res.send({ accessToken, refreshToken, user: omit(user, "password") });
}

export async function invalidateUserSessionHandler(req, res) {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}

export async function getUserSessionsHandler(req, res) {
  const userId = get(req, "user._id");

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}
