const mongoose = require("mongoose");
const validator = require("validator");

const foodAndFormulaSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: false,
      trim: true,
    },
    formChoice: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: String,
      required: false,
      trim: true,
    },
    dateNeededBy: {
      type: String,
      required: false,
      trim: true,
    },
    clinic: {
      type: String,
      required: false,
      trim: true,
    },
    pdf: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  }
);

const FormulaAndFood = mongoose.model("FormulaAndFood", foodAndFormulaSchema);

module.exports = FormulaAndFood;
