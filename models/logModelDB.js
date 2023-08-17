const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema(
  {
    title: { type: String, require: true },
    entry: { type: String, require: true },
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = logSchema;
