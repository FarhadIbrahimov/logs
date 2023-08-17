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

const LogModel = mongoose.model("logs", logSchema);

module.exports = LogModel;
