import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

router.post("/login", new AuthenticateUserController().handle);
router.post("/users", new CreateUserController().handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, new CreateTagController().handle);
router.post("/compliments", ensureAuthenticated, new CreateComplimentController().handle);

export { router };   