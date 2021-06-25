import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

router.post("/login", new AuthenticateUserController().handle);
router.post("/users", new CreateUserController().handle);
router.post("/tags", ensureAdmin, new CreateTagController().handle);
router.post("/compliments", ensureAdmin, new CreateComplimentController().handle);

export { router };   