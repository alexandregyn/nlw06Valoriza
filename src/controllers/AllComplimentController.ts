import { Request, Response } from "express";
import { AllComplimentService } from "../services/AllComplimentService";

class AllComplimentController {
    
    async getAll(request: Request, response: Response) {
        const allComplimentService = new AllComplimentService();
        const compliments = await allComplimentService.getAll();
        return response.json(compliments);
    }

}

export { AllComplimentController };