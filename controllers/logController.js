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
// module.exports.destroy = (req, res) => {
//   res.send("received");
// };
// module.exports.update = async (req, res) => {
//   try {
//     // res.render("logs/:id");   redirects
//   } catch (error) {
//     console.log("Mongo error ", error);
//   }
// };
module.exports.create = async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }

  res.send(req.body);
};
// module.exports.edit = async (req, res) => {
//   res.render("logs/:id/edit");
// };
// module.exports.show = async (req, res) => {
//   res.render("Index");
// };
