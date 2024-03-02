const { Schema, model } = require("mongoose");
const pharmaciesSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please input medicine name."],
  },
  
});

const Pharmacy = model("Pharmacy", pharmaciesSchema);
module.exports = Pharmacy;
