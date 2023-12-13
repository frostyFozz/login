import express, { Application } from 'express';
import routesProduct from './routes/product';
import routeUser from './routes/user';
import { User } from './models/user';
import { Product } from './models/product';
import sequelize from './db/connection';

 class Server {
    private app: Application;
    private port: string;

    constructor() {
       this.app = express();
       this.port = process.env.PORT || '3001';

       sequelize.sync().then(()=> {
         this.midleware();
         this.routes();
         this.listen();
        })
    }

    listen() {
      this.app.listen(this.port, ()=> {
         console.log('Aplicacion corriendo en el puerto ' + this.port);
      })
      
    }
    routes() {
      this.app.use('/api/products', routesProduct);
      this.app.use('/api/users', routeUser);
    }
    midleware(){
      this.app.use(express.json());
    }
}


export default Server; 