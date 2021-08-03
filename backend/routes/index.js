import express from 'express';
const router = express.Router();
import { registerController , productController} from '../controllers';

router.post('/register', registerController.register);



router.post('/products', productController.store);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);
router.get('/products', productController.index);
router.get('/products/:id', productController.show);





export default router;