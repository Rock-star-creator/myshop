import { Product } from '../models';
import multer from 'multer';
import path from 'path';
import CustomErrorHandler from '../services/CustomErrorHandler';
import fs from 'fs';
import productSchema from '../validator/productValidator';

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueFileName = `${Date.now()}-${Math.round(
            Math.random()*1e9)
        }${path.extname(file.originalname)}`;
        cb(null, uniqueFileName);
    }, 
});

const handleMultipartData = multer({storage, limits: { fileSize: 1000000*5}}).single('image');

const productController = {
    async store(req, res, next) {
        handleMultipartData(req, res, async (err) => {
            if (err){
                return next(CustomErrorHandler.serverError(err.message))
            }

            const filepath = req.file.path;

            const { error } = productSchema.validate(req.body);
            if (error){
                fs.unlink(`${appRoot}/${filepath}`, (err) => {
                    if(err){
                        return next(CustomErrorHandler.serverError(err.message));
                    }
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
    },

    async update(req, res, next) {
        handleMultipartData(req, res, async (err) => {
            if (err){
                return next(CustomErrorHandler.serverError(err.message))
            }

            let filepath = req.file.path;

            if (req.file){
                filepath = req.file.path;
            }

           

            const { error } = productSchema.validate(req.body);
            if (error){
            if (req.file){
                fs.unlink(`${appRoot}/${filepath}`, (err) => {
                    if(err){
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
            }
               
                return next(error);
            }
            
            const { name, price, size } = req.body;
            let document;
            try{
                document = await Product.findOneAndUpdate({_id: req.params.id},{
                    name,
                    price,
                    size,
                    ...(req.file && {image: filepath})
                });
            } catch(err){
                return next(err);
            }

            res.status(201).json(document);
        })
    },

    async remove(req, res, next) {
        let documents;
        try{
            documents = await Product.findOneAndDelete({_id: req.params.id});
        } catch(err){
            return next(CustomErrorHandler.serverError(err.message));
        }
        
        return res.json(documents);
    },
    
    async index(req, res, next) {
        let documents;
        try{
            documents = await Product.find().select('-updatedAt -__v');
        } catch(err){
            return next(CustomErrorHandler.serverError(err.message));
        }
        
        return res.json(documents);
    },

    async show(req, res, next) {
        let documents;
        try{
            documents = await Product.findOne({_id: req.params.id}).select('-updatedAt -__v');
        } catch(err){
            return next(CustomErrorHandler.serverError(err.message));
        }
        
        return res.json(documents);
    }
}

export default productController;