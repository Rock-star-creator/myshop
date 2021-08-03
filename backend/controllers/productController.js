import { product } from '../models';
import multer from 'multer';
import path from 'path';

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
        handleMultipartData(req, res, (err) => {
            if (err){
                return next(Cus)
            }
        })
    }
}

export default productController;