/**
 * This file intializes the application
 * The app variable is imported from the custom-express.js file
 */

// Application import
const app = require('./config/custom-express');
const productRoutes = require('./app/routes/product.routes');

// Other variables
const PORT = process.env.PORT || 8080;

// Server initialization
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
