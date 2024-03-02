const express = require("express");
const { addPharmacy } = require("../../controllers/pharmacy");
const router = express.Router();

router.post("/add", addPharmacy);

module.exports = router;
