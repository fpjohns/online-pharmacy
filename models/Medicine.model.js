const mongoose = require("mongoose");
const medicineSchema = mongoose.Schema({
    name: String,
    price: Number,
    recipe: Boolean
});

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;
