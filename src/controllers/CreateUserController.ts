import { Request, Response } from "express";
import { User } from "../entities/User";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response ) {
        const user : User = request.body;
        const createUserService = new CreateUserService();
        const userExec = await createUserService.execute(user);
        return response.json(userExec);
    }

}

export { CreateUserController };