let logData = require("../models/logData");

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
  //   console.log("Destroy Function Hit");
  try {
    await LogModel.findByIdAndDelete(req.params.id);
    res.status(200).redirect(`/logs/${req.params.id}`);
  } catch (error) {
    console.log("Failed to delete document: " + error);
    res.status(404).redirect("/");
  }
};

module.exports.update = async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    await LogModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/logs/${req.params.id}`);
  } catch (error) {
    console.log("Mongo error ", error);
  }
};

module.exports.create = async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    let log = await LogModel.create(req.body);

    res.redirect("/logs");
  } catch (error) {
    console.log("Failed to create a Log document: ", req.params.id, error);
  }
};

module.exports.edit = async (req, res) => {
  let log;
  try {
    log = await LogModel.findById(req.params.id);
    res.render(`Edit`, { log });
  } catch (error) {
    console.log("Failed to locate the document ", req.params.id, error);
    res.status(404).redirect(`/`);
  }
};

module.exports.show = async (req, res) => {
  let log;
  try {
    log = await LogModel.findById(req.params.id);
  } catch (error) {
    console.log("Failed to find Log document: " + req.params.id, error);
  }
  if (log) {
    // console.log(log);
    res.render("Show", { log });
  } else {
    res.redirect("/logs");
  }
};

module.exports.seed = async (req, res) => {
  console.log("I am Groot");
  try {
    await LogModel.deleteMany({});

    // Loop through each log object in the logData array, this way Seed will create a list in the order it is listed in logData file
    for (let i = 0; i < logData.length; i++) {
      // Create a new log document in the database using the current log object
      await LogModel.create(logData[i]);
    }
  } catch (error) {
    console.log("SEED action failed to perform ", error);
  }
  res.redirect("/logs");
};

module.exports.clear = async (req, res) => {
  try {
    await LogModel.deleteMany({});
  } catch (error) {
    console.log("CLEAR action failed to perform ", error);
  }
  res.redirect("/logs");
};
