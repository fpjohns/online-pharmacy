const Basket = require("../models/Basket.model");
const User = require('../models/User.model')
const Medicine = require('../models/Medicine.model')
module.exports.basketsContoller = {
  getAllBasket: async (req, res) => {
    try {
      const basket = await Basket.find();
      res.json(basket);
    } catch (e) {
      res.json(e);
    }
  },
  createBasket: async (req, res) => {
    const { name, price } = req.body;
    try {
      const basket = await Basket.create({
        name,
        price,
      });
      res.json(basket);
    } catch (e) {
      res.json(e);
    }
  },
  changeBasket: async (req, res) => {
    const { name, price } = req.body;
    try {
      const basket = await Basket.findByIdAndUpdate(req.params.id, {
        name,
        price,
      });
      res.json(basket);
    } catch (e) {
      res.json(e);
    }
  },
  deleteBasket: async (req, res) => {
    try {
      const basket = Basket.deleteOne(req.params.id);
      res.json(basket);
    } catch (e) {
      res.json(e);
    }
  },
  clearBasket: async(req, res) =>{
    try{
        await Basket.find({user: req.params.userId}).updateOne({
          medicine: [],
          total: 0
        })
        res.json('корзина  очищена')
    }catch(e){
      res.json(e.message)
    }
  }
};
