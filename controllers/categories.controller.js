const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getAllCategory: async (req, res) => {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (e) {
      res.json(e);
    }
  },
  createCategory: async (req, res) => {
    const { name, price } = req.body;
    try {
      const category = await Category.create({
        name,
        price,
      });
      res.json(category);
    } catch (e) {
      res.json(e);
    }
  },
  changeCategory: async (req, res) => {
    const { name, price } = req.body;
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, {
        name,
        price,
      });
      res.json(category);
    } catch (e) {
      res.json(e);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const category = Category.deleteOne(req.params.id);
      res.json(category);
    } catch (e) {
      res.json(e);
    }
  },
};
