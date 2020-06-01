import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    pricing: [{date: Date, price: Number}],
    images: [{src: String, isCover: Boolean}],
    rating: Number,
    shipping: {
        package: {
            weight: Number,
            height: Number,
            depth: Number,
        },
        cargo: {
            free: Boolean,
            instantly: Boolean
        }
    },
    isFavorite: Boolean
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;