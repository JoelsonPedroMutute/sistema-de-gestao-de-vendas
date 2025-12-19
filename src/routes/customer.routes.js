const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.post('/', CustomerController.create);
router.get('/', CustomerController.getAll);
router.get('/:id', CustomerController.getById);
router.patch('/:id', CustomerController.update);
router.delete('/:id', CustomerController.delete);

module.exports = router;
