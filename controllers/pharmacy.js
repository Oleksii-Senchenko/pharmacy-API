const HttpError = require("../helpers/HttpError");
const tryCatch = require("../middlewares/tryCatch");
const Medicine = require("../models/medicks");
const Pharmacy = require("../models/pharmacies");

const addPharmacy = tryCatch(async (req, res) => {
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

const getPharmacy = tryCatch(async (req, res) => {
  const pharmacy = await Pharmacy.find();
  res.status(200).json(pharmacy);
});

const getMedicalByPharmacy = tryCatch(async (req, res) => {
  const { id } = req.params;

  const pharmacy = await Pharmacy.findById(id);

  if (!pharmacy) {
    return res.status(404).json({ message: "Pharmacy dont found" });
  }

  const medicines = await Medicine.find({ pharmacy: id });

  res.status(200).json(medicines);
});

const getAllPharmacy = tryCatch(async (req, res) => {
  const medicines = await Medicine.find();

  res.status(200).json(medicines);
});

module.exports = {
  addPharmacy,
  getPharmacy,
  getMedicalByPharmacy,
  getAllPharmacy,
};
