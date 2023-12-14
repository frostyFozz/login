import {Request, Response} from 'express';
import bcrypt from "bcrypt";
import { User } from '../models/user';
import jwt from 'jsonwebtoken';


export const newUser = async ( reg: Request, res: Response ) => {

   const { username, password } = reg.body;

   // Validar si el usuario existe en la base de datos
    const user = await User.findOne({ where: { username: username } });

    if(user){
        return res.status(400).json({
            msg: `Este usuario ya existe ${ username }`
        })
    }
    const hashedPassword = await bcrypt.hash( password, 10 );
    
    try{
        // para guardar el usuario en la base de datos
    await User.create({
        username: username,
        password: hashedPassword
    })
    res.json({
        msg: `Usuario ${ username } creado exitosamente`,
        
    })
} catch(error){
    res.status(400).json({
        msg: "Ha ocurrido un error",
        error
    })
}
}

export const loginUser = async (reg: Request, res: Response) => {

    const { username, password } = reg.body;
    //Validar si el usuario existe 
    const user: any = await User.findOne({ where: { username: username } });
    if(!user){
        return res.status(400).json({
            msg: `El usuario con el nombre ${username} no existe en la base de datos`
        })
    }
    // Para validar el password

    const passwordValid = await bcrypt.compare(password, user.password)
    if(!passwordValid) {
        return res.status(400).json({
            msg: 'Password incorrecta'
        })
    }
    // creacion de token
    const token = jwt.sign({
        username: username,
    },process.env.SECRET_KEY || "nada123",);

    res.json(token);

}