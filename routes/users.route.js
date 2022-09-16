const { Router } = require("express");
const router = Router();
const { usersController } = require("../controllers/users.controller");

router.get("/user", usersController.getAllUser);
router.post("/user", usersController.createUser);
router.patch("/user", usersController.changeUser);
router.delete("/user/:id", usersController.deleteUser);
router.patch("/user/:userId", usersController.cashLimit);

module.exports = router;
