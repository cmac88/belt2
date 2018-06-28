const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/products')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength: [3,'Product name must be at least three characters long'], 
        required: [true, 'Product name must be filled in']},
    qty: {
        type: Number, 
        min: [0,'Product quantity must be 0 or greater'], 
        required: [true, 'Product quantity must be filled in']},
    price: {
        type: Number, 
        min: [0,'Price must be greater '], 
        required: [true, 'Product must have price']}, 
});



autoIncrement.initialize(mongoose.connection);
ProductSchema.plugin(autoIncrement.plugin, 'products');
module.exports =
mongoose.model('products', ProductSchema)