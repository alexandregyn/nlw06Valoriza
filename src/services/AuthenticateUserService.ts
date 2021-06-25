import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user: User = await usersRepositories.findOne({ email });

        if (!user) {
            throw new Error("Email/Password incorrect");            
        }
        
        const passwordMatch =  await compare(password, user.password);
        
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");            
        }

        return sign({ email: user.email }, 'seguranca', { subject: user.id, expiresIn: "1d" });

    }
}

export { AuthenticateUserService };