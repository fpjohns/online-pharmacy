const { Router } = require("express");
const router = Router();
const { medicinesController } = require("../controllers/medicines.controller");

router.get("/medicine", medicinesController.getAllMedicine);
router.get("/medicine/:categoryId", medicinesController.getAllMedicineByCategory);
router.get("/medicine/category/:id", medicinesController.getAllMedicineById);
router.post("admin/medicine", medicinesController.createMedicine);
router.patch("admin/medicine", medicinesController.changeMedicine);
router.patch("admin/medicine/:medicineId/:basketId/:userId", medicinesController.addMedicineByIdInBasket)
router.delete("admin/medicine/:id", medicinesController.deleteMedicine);

module.exports = router;
