import { Product } from '../models';
import multer from 'multer';
import path from 'path';
import CustomErrorHandler from '../services/customErrorHandler';
import Joi from 'joi';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueFileName = `${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueFileName);
    } 
});

const handleMultipartData = multer({storage, limits: { fileSize: 1000000*5}}).single('image');

const productController = {
    async store(req, res, next) {
        handleMultipartData(req, res, async (err) => {
            if (err){
                return next(CustomErrorHandler.serverError(err.message))
            }

            const filepath = req.file.path;

            const productSchema = Joi.object({
                name: Joi.string().required(),
                price: Joi.number().required(),
                size: Joi.string().required(),
            });

            const { error } = productSchema.validate(req.body);
            if (error){
                fs.unlink(`${appRoot}/${filepath}`, (err) => {
                    return next(CustomErrorHandler.serverError(err.message));
                });

                return next(error);
            }
            
            const { name, price, size } = req.body;
            let document;
            try{
                document = await Product.create({
                    name,
                    price,
                    size,
                    image: filepath,
                })
            } catch(err){
                return next(err);
            }

            res.status(201).json(document);
        })
    }
}

export default productController;