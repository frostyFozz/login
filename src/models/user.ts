import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

// cambiar la definicion del product 
export const User = sequelize.define ('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: true
    }
})

