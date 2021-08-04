import express from 'express';
const router = express.Router();
import { registerController ,loginController,userController,refreshController, productController} from '../controllers';
import auth from '../middlewares/auth';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.post('/refresh', refreshController.refresh);
router.post('/logout', auth, loginController.logout);


router.post('/products', productController.store);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);
router.get('/products', productController.index);
router.get('/products/:id', productController.show);





export default router;