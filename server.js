const express = require("express");
const app = express();
require("dotenv").config();
const mongoConfig = require("./config");
const PORT = 3000;
mongoConfig();

const jsxEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

const methodOverride = require("method-override");

const logRoutes = require("./routes/logRoutes");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/logs", logRoutes);

app.get("/", (req, res) => {
  res.redirect("/logs");
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
