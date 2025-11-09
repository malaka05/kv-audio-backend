// mongoose library එක import කරනවා
import mongoose from "mongoose";

// product data structure එක define කරන Schema එක
const productSchema = new mongoose.Schema({

    // product එකේ නම field එක
    name: {
        type: String,      // type එක String
        required: true     // name එක අනිවාර්යයි
    },

    // product එකේ price field එක
    price: {
        type: Number,      // type එක Number
        required: true     // price එක අනිවාර්යයි
    },

    // product එකේ description field එක
    description: {
        type: String,      // type එක String
        required: true     // description එක අනිවාර්යයි
    },

});

// Schema එකෙන් model එක create කරනවා
// "product" කියන collection එකට map වෙනවා MongoDB තුළ
const product = mongoose.model("product", productSchema);

// model එක export කරනවා, වෙන තැන්වල use කරන්න
export default product;
