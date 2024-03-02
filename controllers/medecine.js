const HttpError = require("../helpers/HttpError");
const tryCatch = require("../middlewares/tryCatch");
const Medicine = require("../models/medicks");
const Pharmacy = require("../models/pharmacies");
const cloudinary = require("../service/cloudinary");
const fs = require("fs/promises");
const addMedicineToPharmacy = tryCatch(async (req, res) => {
  const { pharmacyId, name } = req.body;

  if (req.file) {
    const { path: tempUpload } = req.file;
    console.log(tempUpload);
    const resultImg = await cloudinary.uploader.upload(tempUpload);
    await fs.unlink(tempUpload);
    const image = resultImg.url;

    req.body.image = image;
    console.log("imagggggggggggggggggggge", image);
  }

  const pharmacy = await Pharmacy.findById(pharmacyId);

  if (!pharmacy) {
    throw HttpError(404, "Pharmacy not found");
  }

  const newMedicine = new Medicine({
    ...req.body,
    pharmacy: pharmacy._id,
  });

  await newMedicine.save();

  res.status(201).json({ message: "Successfully added" });
});

module.exports = addMedicineToPharmacy;
