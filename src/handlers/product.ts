import { Request,Response } from "express";
import Product from "../models/Product.model";

export const createProduct = (req:Request, res:Response)=>{
    console.log(req.body);

    res.json('Hola desde Post en puerto 4000')
}