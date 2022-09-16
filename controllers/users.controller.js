const Basket = require("../models/Basket.model");
const User = require("../models/User.model");
module.exports.usersController = {
  getAllUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  createUser: async (req, res) => {
    const { name, wallet, recipe } = req.body;
    try {
      const user = await User.create({
        name,
        wallet,
        recipe,
      });
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  changeUser: async (req, res) => {
    const { name, wallet, recipe } = req.body;
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        name,
        wallet,
        recipe,
      });
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.deleteOne(req.params.id);
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  cashLimit: async (req, res) => {
    const user = await User.findById(req.params.userId);
    const basket = await Basket.find({ user: req.params.userId });
    try {
      if (User.wallet < Basket.total) {
        return res.json("недостадочно средств");
      }
      await user.updateOne({
        $inc: { wallet: basket.total * -1 },
      });
      await Basket.updateOne({
        medicine: [],
        total: 0,
      });
      res.json("покупка совершена");
    } catch (e) {
      res.json(e);
    }
  },
};
  