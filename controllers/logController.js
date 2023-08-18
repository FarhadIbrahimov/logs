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
module.exports.destroy = async (req, res) => {
  console.log("Hit POint");
  try {
    await LogModel.findByIdAndDelete(req.params.id);
    // res.status(200).redirect(`/logs/${req.params.id}`);
  } catch (error) {
    console.log("Failed to delete document: " + error);
    // res.status(404).redirect("/");
  }
  res.redirect("/logs");
};
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
  try {
    let log = await LogModel.create(req.body);
    res.send(req.body);
  } catch (error) {
    console.log("Failed to create a Log document: ", error);
  }
};
// module.exports.edit = async (req, res) => {
//   res.render("logs/:id/edit");
// };
module.exports.show = async (req, res) => {
  let log;
  try {
    log = await LogModel.findById(req.params.id);
  } catch (error) {
    console.log("Failed to find Log document: " + req.params.id, error);
  }
  if (log) {
    res.render("Show", { log });
  } else {
    res.redirect("/logs");
  }
};
