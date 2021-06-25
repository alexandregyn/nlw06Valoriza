import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {
    async execute(iUserRequest: IUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        if (!iUserRequest.email) {
            throw new Error("Email Incorreto!");
        }
        
        const userAlreadyExists = await usersRepositories.findOne({ email: iUserRequest.email } );
        
        if (userAlreadyExists) {
            throw new Error("Já existe usuário");
        }

        iUserRequest.password = await hash(iUserRequest.password, 8);
        iUserRequest.admin = iUserRequest.admin ?? false;

        const user = usersRepositories.create(iUserRequest)

        await usersRepositories.save(user);

        return user;
        
    }
}

export { CreateUserService };