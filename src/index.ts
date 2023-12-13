
import express from "express";
import Server from "./server";
import dotenv from 'dotenv';

import routesProduct from './routes/product'
import routesUser from './routes/user'
import { Product } from "./models/product";
import { User } from "./models/user";

//Configurar dotenv
dotenv.config();

const bootstrap = async () => {   
    // Cargar conexion
    await Product.sync({ alter: true })
    await User.sync({ alter: true });

    // Crear servidor
    const app = express();
    const port = process.env.PORT || '3001';
    
    app.use(express.json());
    
    app.use('/api/products', routesProduct);
    app.use('/api/users', routesUser);
    
    app.listen(port, () => {
        console.log('Aplicacion corriendo en el puerto ' + port);
    })
}

bootstrap();