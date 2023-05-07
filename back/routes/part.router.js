const express = require("express");

const router = express.Router();
const partController = require("../controllers/part.controller");

// router.get("/", partController.getAll);
router.post("/action", partController.action);

module.exports = router;
