import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliments";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

class CreateComplimentService {

    async execute(compliment: Compliment) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        const usersReceiverExists = await usersRepositories.findOne(compliment.user_receiver);
        if ( !usersReceiverExists ) {
            throw new Error("User Receiver dois not exists!");
        }

        if ( compliment.user_sender === compliment.user_receiver ) {
            throw new Error("Incorrect User Receiver");
        }

        const complimentExec = complimentsRepositories.create(compliment)
        await complimentsRepositories.save(complimentExec);
        
        return complimentExec;
    }

}

export { CreateComplimentService };