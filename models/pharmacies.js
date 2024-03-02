const { Schema, model } = require("mongoose");

const pharmaciesSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please input name of pharmacy."],
  },
  image: {
    type: String,
    required: [true, "Please provide the image."],
  },
  price:{
    type: String,
    required: [true, "Please input price."],
  },
  describe:{
    type: String,
    required: [true, "Please input desc."],
  }
});

const Pharmacy = model('Pharmacy', pharmaciesSchema);
module.exports = Pharmacy;
