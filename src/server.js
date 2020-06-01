import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { Product } from './models';
import routes from './routes';

import { createProducts } from './helpers/seed';

const eraseDatabaseOnSync = true;

const connectDb = () => {
    return mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds161780.mlab.com:61780/gg-case`);
};

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/products', routes.Product);

// Connect DB
connectDb().then(async () => {
    if (eraseDatabaseOnSync) {
        // Clear DB
        await Promise.all([
            Product.deleteMany({})
        ]);
        // Seed DB
        createProducts();
    }
    
    // Run Server
    app.listen(process.env.PORT, () => {
        console.log(`DB Connected!`);
        console.log(`Express Server listening on port ${process.env.PORT}!`);
    })
}).catch(err => {
    console.log(err)
});
