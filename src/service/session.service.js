import config from "config";
import pkg from "lodash";
const { get } = pkg;

import Session from "../model/session.model.js";
import { sign, decode } from "../utils/jwt.utils.js";
import { findUser } from "./user.service.js";

export async function createSession(userId, userAgent) {
  const session = await Session.create({ user: userId, userAgent });

  return session.toJSON();
}

export function createAccessToken({ user, session }) {
  // Build and return the new access token
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } // 15 minutes
  );
  return accessToken;
}

export async function reIssueAccessToken({ refreshToken }) {
  // Decode the refresh token
  const { decoded } = decode(refreshToken);

  if (!decoded || !get(decoded, "_id")) return false;

  // Get the session
  const session = await Session.findById(get(decoded, "_id"));

  // Make sure the session is still valid
  if (!session || !session?.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = createAccessToken({ user, session });

  return accessToken;
}

export async function updateSession(query, update) {
  return Session.updateOne(query, update);
}

export async function findSessions(query) {
  return Session.find(query).lean();
}
