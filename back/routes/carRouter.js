const express = require("express");

const carController = require("../controllers/carController");

const { body } = require("express-validator");

const router = express.Router();

router.get("/", carController.getAll);

router.post(
  "/action",
  [
    body("licensePlate").trim().isLength({ min: 6, max: 6 }),
    body("carTypeId").isNumeric(),
    body("clientId").isNumeric(),
    body("receiptDate").isDate(),
  ],
  carController.action
);

router.delete("/delete/:id", carController.delete);

module.exports = router;
