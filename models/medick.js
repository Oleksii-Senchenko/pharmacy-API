const { Schema, model } = require("mongoose");

const medicinesSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please input medicine name."],
  },
  pharmacy: {
    type: Schema.Types.ObjectId,
    ref: 'Pharmacy'
  },

});

const Medicine = model('Medicine', medicinesSchema);
module.exports = Medicine;
