import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class AllComplimentService {
    
    async getAll() {
        console.log('chegou aqui');
        
        return await getCustomRepository(ComplimentsRepositories).find();
    }

}

export { AllComplimentService };