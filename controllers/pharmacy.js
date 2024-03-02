const HttpError = require("../helpers/HttpError");
const tryCatch = require("../middlewares/tryCatch");
const Pharmacy = require("../models/pharmacies");

const addPharmacy = tryCatch(async (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const pharmacy = await Pharmacy.findOne({ name });

  if (pharmacy) {
    throw HttpError(409, "Pharmacy already exist");
  }
  const responce = await Pharmacy.create(req.body);

  if (!responce) {
    throw HttpError(400, "Something went wrong");
  }

  res.status(201).json(responce);
});
module.exports = { addPharmacy };
