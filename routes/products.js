const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');


// router.get('/:id', productController.getById);

// router.use(middleware);

router
    .get('/', productController.getAll)
    .post('/', productController.create)
    .put('/', productController.updateProduct)
    .delete('/:id', productController.deleteById)


module.exports = router;
