import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const { admin } = await usersRepositories.findOne(request.user_id);
    return admin ? next() : response.status(401).json({error: "Unauthotized"});
}