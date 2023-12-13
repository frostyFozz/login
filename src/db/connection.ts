import { Sequelize } from "sequelize";

const sequelize  = new Sequelize ( {
    'host' :'localhost',
    'dialect' : 'postgres',
    'port' : 5432,
    'logging' : false,
    'password': 'DanBet123',
    'username' : 'postgres'
    
  })

export default sequelize;