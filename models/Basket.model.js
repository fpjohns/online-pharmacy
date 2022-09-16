const mongoose = require("mongoose");
const basketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    medicine: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicine'
    }],
    total: {
        type: mongoose.Schema.Types.ObjectId,
        default: 0
    }
});

const Basket = mongoose.model("Basket", basketSchema);
module.exports = Basket;
