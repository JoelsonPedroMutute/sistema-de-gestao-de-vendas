const express = require('express');
const router = express.Router();
const SellerController = require('../controllers/SellerController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.post('/', SellerController.create);
router.get('/', SellerController.getAll);
router.get('/:id', SellerController.getById);
router.patch('/:id', SellerController.update);
router.delete('/:id', SellerController.delete);
module.exports = router;