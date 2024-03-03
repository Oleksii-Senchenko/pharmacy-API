const express = require("express");
const { addPharmacy, getMedicalByPharmacy, getPharmacy, getAllPharmacy } = require("../../controllers/pharmacy");
const router = express.Router();

router.post("/add", addPharmacy);
router.get("/", getPharmacy);
router.get("/all", getAllPharmacy);
router.get("/:id", getMedicalByPharmacy);
module.exports = router;
