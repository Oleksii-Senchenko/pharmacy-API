const express = require("express");
const addMedicineToPharmacy = require("../../controllers/medecine");
const upload = require("../../middlewares/uploadImg");
const router = express.Router();

router.post("/add", upload.single("image"), addMedicineToPharmacy);

module.exports = router;
