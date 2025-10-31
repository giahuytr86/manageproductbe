const db = require('../utils/db..util');

module.exports = {
    async getAllProducts() {
        return db('shoes').select('*');
    },

    async getProductById(id) {
        return db('shoes').where({ id }).first();
    },

    async createProduct(product) {
        return db('shoes').insert(product).returning('*');
    },

    async updateProduct(id, product) {
        return db('shoes').where({ id }).update(product).returning('*');
    },
    
    async deleteProduct(id) {
        return db('shoes').where({ id }).del();
    }
}