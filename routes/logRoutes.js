const express = require("express");

const router = express.Router();

const logController = require("../controllers/logController");

// I.N.D.U.C.E.S.

//index
router.get("/", logController.index);
// new
router.get("/new", logController.new);

//delete
router.delete("/:id", logController.destroy);

//update
router.put("/:id", logController.update);

//create
router.post("/", logController.create);
//seed
router.post("/seed", logController.seed);

//edit
router.get("/:id/edit", logController.edit);

//show
router.get("/:id", logController.show);

module.exports = router;
