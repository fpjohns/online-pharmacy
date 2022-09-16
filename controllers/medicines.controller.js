const Medicine = require("../models/Medicine.model");
const Basket = require("../models/Basket.model");
const User = require("../models/User.model");

module.exports.medicinesController = {
  getAllMedicine: async (req, res) => {
    try {
      const medicine = await Medicine.find();
      res.json(medicine);
    } catch (e) {
      res.json(e);
    }
  },
  getAllMedicineById: async (req, res) => {
    try {
      const medicine = await Medicine.findById(req.params.id);
      res.json(medicine);
    } catch (e) {
      res.json(e);
    }
  },
  createMedicine: async (req, res) => {
    const { name, price } = req.body;
    try {
      const medicine = await Medicine.create({
        name,
        price,
      });
      res.json(medicine);
    } catch (e) {
      res.json(e);
    }
  },
  changeMedicine: async (req, res) => {
    const { name, price } = req.body;
    try {
      const medicine = await Medicine.findByIdAndUpdate(req.params.id, {
        name,
        price,
      });
      res.json(medicine);
    } catch (e) {
      res.json(e);
    }
  },
  deleteMedicine: async (req, res) => {
    try {
      const medicine = Medicine.deleteOne(req.params.id);
      res.json(medicine);
    } catch (e) {
      res.json(e);
    }
  },
  getAllMedicineByCategory: async (req, res) => {
    try {
      const medicine = await Medicine.find({ categoryId: req.params.id });
      res.json(medicine);
    } catch (e) {
      res.json(e);
    }
  },
  addMedicineByIdInBasket: async (req, res) => {
    try {
      const medicine = await Medicine.findById(req.params.medicineId);
      const basket = await Basket.findById(req.body.basketId);
      if (
        medicine.recipe === true &&
        User.findById(req.params.userId).recipe === false
      ) {
        return res.json("рецепт нужен");
      } else {
        await basket.updateOne({
          $push: { medicine: req.params.medicineId },
          $inc: { total: medicine.price },
        });
      }
    } catch (e) {
      console.log(e);
    }
  },
};
