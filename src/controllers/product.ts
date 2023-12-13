
import {Request, Response } from 'express';
import { Product } from '../models/product';




export const getProducts = async (reg: Request, res: Response) => {
    
    await Product.create({
        name: Math.random().toString().substring(2, 9)
    })

    const listProducts = await Product.findAll();
    res.json({ listProducts })
}