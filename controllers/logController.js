const LogModel = require("../models/logModelDB");

module.exports.index = async (req, res) => {
  try {
    const logs = await LogModel.find();
    res.render("Index", { logs });
  } catch (err) {
    console.log("Mongo error: ", err);
  }
};

module.exports.new = (req, res) => {
  res.render("New");
};
// module.exports.destroy = async (req, res) => {
//   try {
//     // res.render("logs/:id");
//   } catch (error) {
//     console.log("Mongo error ", error);
//   }
// };
// module.exports.update = async (req, res) => {
//   try {
//     // res.render("logs/:id");   redirects
//   } catch (error) {
//     console.log("Mongo error ", error);
//   }
// };
// module.exports.create = async (req, res) => {
//   res.render("/");
// };
// module.exports.edit = async (req, res) => {
//   res.render("logs/:id/edit");
// };
// module.exports.show = async (req, res) => {
//   res.render("Index");
// };
