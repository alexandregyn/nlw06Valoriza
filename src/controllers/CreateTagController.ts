import { Request, Response } from "express";
import { Tag } from "../entities/Tag";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {

    async handle(request: Request, response: Response ) {
        const { name }: Tag = request.body;
        const createTagService = new CreateTagService();
        const tag = await createTagService.execute(name);
        return response.json(tag);
    }

}

export { CreateTagController }