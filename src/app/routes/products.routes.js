const productController = require('../controllers/ProductsController');

module.exports = (app) => {
	app.get('/products', productController.getAllProducts());

	app.get('/products/:id', productController.getOneProduct());

	app.get(
		'/products-from-supplier/:id',
		productController.getAllProductsFromSupplier()
	);

	app.post('/products', productController.addProduct());

	app.put('/products/:id', productController.updateProduct());

	app.delete('/products/:id', productController.deleteProduct());
};
