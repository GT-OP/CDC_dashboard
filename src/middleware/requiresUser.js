import pkg from "lodash";
const { get } = pkg;

const requiresUser = async (req, res, next) => {
  const user = get(req, "user");

  if (!user) {
    return res.sendStatus(403);
  }

  return next();
};

export default requiresUser;
