const productService = require('../services/products.service');

module.exports = {
    async getAllProducts(req, res) {
        try {
            const products = await productService.getAllProducts();
            if (!products) {
                res.status(404).json({ error: 'No products found' });
                return;
            }
            res.status(200).json(products);
            return;
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch products' + error.message });
            return;
        }
    },
    async getProductById(req, res) {
        const { id } = req.params;
        try {
            const product = await productService.getProductById(id);
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            res.status(200).json(product);
            return;
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch product' + error.message });
            return;
        }
    },
    async createProduct(req, res) {
        const productData = req.body;
        try {
            const newProduct = await productService.createProduct(productData);
            res.status(201).json(newProduct);
            return;
        } catch (error) {
            res.status(500).json({ error: 'Failed to create product' + error.message });
            return;
        }
    },
    async updateProduct(req, res) {
        const { id } = req.params;
        const productData = req.body;
        try {
            const updatedProduct = await productService.updateProduct(id, productData);
            if (!updatedProduct) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            res.status(200).json(updatedProduct);
            return;
        } catch (error) {
            res.status(500).json({ error: 'Failed to update product' + error.message });
            return;
        }
    },
    async deleteProduct(req, res) {
        const { id } = req.params;
        try {
            const deleted = await productService.deleteProduct(id);
            if (!deleted) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            res.status(204).json();
            return;
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete product' + error.message });
            return;
        }
    }
}
