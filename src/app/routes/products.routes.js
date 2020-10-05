const productController = require('../controllers/ProductsController');

module.exports = (app) => {
	app.get('/products', productController.getAllproducts());

	app.get('/products/:id', productController.getOneProduct());

	app.post('/products', productController.addProduct());

	app.put('/products/:id', productController.updateProduct());

	app.delete('/products/:id', productController.deleteProduct());
};
