import { Request, Response, NextFunction } from "express";


const validateToken = (reg: Request, res: Response, next: NextFunction) => {
    console.log('Validar token');
    
    next()
}

export default validateToken;