import { NextFunction, Request, Response } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const adimin = true;
    return adimin ? next() : response.status(401).json({error: "Unauthotized"});
}