import { createUserHandler } from "./controller/user.controller.js";
import { createUserSessionHandler } from "./controller/session.controller.js";
import { requiresUser, validateRequest } from "./middleware/index.js";
import {
  createCompanyHandler,
  getCompanyDetailsHandler,
  getCompanyHandler,
} from "./controller/company.controller.js";
// import {
//   createUserSchema,
//   createUserSessionSchema,
// } from "./src/schema/user.schema.js";

export default function (app) {
  app.get("/healthcheck", (req, res) => res.sendStatus(200));

  // Register user
  app.post(
    "/user/create",
    // validateRequest(createUserSchema),
    createUserHandler
  );

  // Login
  app.post(
    "/session/create",
    // validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  app.post("/company/create", requiresUser, createCompanyHandler);
  app.get("/company/:id", requiresUser, getCompanyDetailsHandler);
  app.get("/company", requiresUser, getCompanyHandler);
}
