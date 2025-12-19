const express = require('express');
const router = express.Router();
const SaleController = require('../controllers/SaleController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.post('/', SaleController.create);
router.get('/', SaleController.getAll);
router.get('/:id', SaleController.getById);
router.patch('/:id', SaleController.update);
router.delete('/:id', SaleController.delete);

module.exports = router;