const { Schema, model } = require("mongoose");

const medicinesSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please input name of pharmacy."],
  },
  image: {
    type: String,
    required: [true, "Please provide the image."],
  },
  price: {
    type: String,
    required: [true, "Please input price."],
  },
  pharmacy: {
    type: Schema.Types.ObjectId,
    ref: "Pharmacy",
  },
});

const Medicine = model("Medicine", medicinesSchema);
module.exports = Medicine;
