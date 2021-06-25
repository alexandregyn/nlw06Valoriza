import { Request, Response } from "express";
import { Compliment } from "../entities/Compliments";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController {

    async handle(request: Request, response: Response ) {
        const compliment : Compliment = request.body;
        const createComplimentService = new CreateComplimentService();
        compliment.user_sender = request.user_id;
        const complimentExec = await createComplimentService.execute(compliment);
        return response.json(complimentExec);
    }

}

export { CreateComplimentController };