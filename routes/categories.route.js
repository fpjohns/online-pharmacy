const { Router } = require("express");
const router = Router();
const { categoriesController } = require("../controllers/categories.controller");

router.get("/category", categoriesController.getAllCategory);
router.post("admin/category", categoriesController.createCategory);
router.patch("admin/category", categoriesController.changeCategory);
router.delete("admin/category/:id", categoriesController.deleteCategory);

module.exports = router;
