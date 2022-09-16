const { Router } = require("express");
const router = Router();
const { basketsContoller } = require("../controllers/baskets.controller");

router.get("/basket", basketsContoller.getAllBasket);
router.post("/basket", basketsContoller.createBasket);
router.patch("/basket", basketsContoller.changeBasket);
router.delete("/basket/:id", basketsContoller.deleteBasket);
router.patch('/basket/medicine/:userId', basketsContoller.clearBasket)
module.exports = router;
