import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'


const validateToken = (reg: Request, res: Response, next: NextFunction) => {
    
    
    const headerToken = reg.headers['authorization']
    console.log(headerToken);
    if(headerToken !=undefined && headerToken.startsWith('bearer')) {

        try{const bearerToken = headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'nada123')
            next()
        } catch (error) {
            res.status(401).json({
                msg: 'Token invalido'
            })
        }

        
    } else {
        res.status(401).json({
            msg:  'acceso Denegado'
        })
    }
    next()
}

export default validateToken;