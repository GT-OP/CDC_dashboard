import pkg from "lodash";
const { omit } = pkg;

import User from "../model/user.model.js";

export async function createUser(input) {
  try {
    return await User.create(input);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function findUser(query) {
  return User.findOne(query).lean();
}

export async function validatePassword({ email, password, type }) {
  const user = await User.findOne({ email, type });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
}
