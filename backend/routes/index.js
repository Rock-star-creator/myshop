import express from 'express';
const router = express.Router();
import { registerController , productController} from '../controllers';

router.post('/register', registerController.register);



router.post('/products', productController.store);




export default router;