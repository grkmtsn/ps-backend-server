import { Product } from '../../models';

const getAll = async (req, res) => {
    try {
        const products = await Product.find();

        let message = `${products.length} product found.`;
        if (products === undefined || products.length == 0) message = "No product found!";
    
        res.send({
            success: true,
            message: message,
            data: products
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while retrieving products."
        });
    }
}

const getById = async (req,res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).send({
                success: false,
                message: `Product not found with id ${id}`
            });
        }

        res.send({
            success: true,
            message: 'Product successfully retrieved',
            data: product
        });
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).send({
                success: false,
                message: `Product not found with id ${id}`
            });
        }
        return res.status(500).send({
            success: false,
            message: `Error retrieving product with id ${id}`
        });
    }
}

const toggleFavoriteProduct = async (req,res) => {
    const { id } = req.body;
    try {
        const product = await Product.findById(id);
        product.isFavorite = !product.isFavorite;
        await product.save();
        res.send({
            success: true
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
        });
    }
}

export { getAll, getById, toggleFavoriteProduct }