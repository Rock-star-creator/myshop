import express from 'express';
const router = express.Router();
import { registerController ,loginController, productController} from '../controllers';

router.post('/register', registerController.register);
router.post('/login', loginController.login);



router.post('/products', productController.store);




export default router;