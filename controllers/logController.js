const LogModel = require("../models/logModelDB");

module.exports.index = async (req, res) => {
  res.render("/");
};

module.exports.new = async (req, res) => {
  res.render("logs/New");
};
module.exports.destroy = async (req, res) => {
  res.render("logs/:id");
};
module.exports.update = async (req, res) => {
  res.render("logs/:id");
};
module.exports.create = async (req, res) => {
  res.render("/");
};
module.exports.edit = async (req, res) => {
  res.render("logs/:id/edit");
};
module.exports.show = async (req, res) => {
  res.render("logs/:id");
};
