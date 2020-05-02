const mongo = require('./src/connections/mongodb.connection');

const express = require('express');
const app = express();
const port = process.env.PORT || 7007;

const productRoutes = require('./src/routes/product.routes');

const bodyParser = require('body-parser');

const { eurekaClient } = require('./src/environment/config/eureka.config');

const cors = require('cors')

app.use(bodyParser.json());

app.use(cors())

eurekaClient.start();

// routes:
app.use('/products', productRoutes);

// default:
app.use('*', (req, res) => {
    res.status(404).send({
      error: 'not available',
    });
});

app.listen(port, () => {
    console.log(`Server running on port [${port}]`);
});
  