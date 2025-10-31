const db = require('../utils/db..util');

module.exports = {
    async getAllProducts() {
        return db('products').select('*');
    },

    async getProductById(id) {
        return db('products').where({ id }).first();
    },

    async createProduct(product) {
        return db('products').insert(product).returning('*');
    },

    async updateProduct(id, product) {
        return db('products').where({ id }).update(product).returning('*');
    },
    
    async deleteProduct(id) {
        return db('products').where({ id }).del();
    }
}