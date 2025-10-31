const express = require('express');
const productsRoute = require('./routes/products.route');

const app = express();
app.use(express.json());



app.use('/api', productsRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;