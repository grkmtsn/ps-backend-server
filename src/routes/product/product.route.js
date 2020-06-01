import express from 'express';
const router = express.Router();

import { productController } from '../../controllers';

router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/toggle-favorite', productController.toggleFavoriteProduct);

export default router;