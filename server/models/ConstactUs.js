const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true, maxlength: 60 },
    lastName: { type: String, required: true, trim: true, maxlength: 60 },
    email: { type: String, required: true, trim: true, lowercase: true },
    contactNumber: {
      type: String,
      required: false,
      trim: true,
      maxlength: 20,
    },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Contact", contactUsSchema);