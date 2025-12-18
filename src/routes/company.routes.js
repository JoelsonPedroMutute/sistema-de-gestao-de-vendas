const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/CompanyController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);
router.post('/', CompanyController.create);
router.get('/', CompanyController.getAll);
router.get('/:id', CompanyController.getById);
router.patch('/:id', CompanyController.update);
router.delete('/:id', CompanyController.delete);

module.exports = router;