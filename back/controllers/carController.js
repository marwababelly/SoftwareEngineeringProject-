const { validationResult } = require("express-validator");

const Car = require("../models/Car");

exports.getAll = (req, res, next) => {
  Car.getAll()
    .then(([rows, fieldData]) => {
      res.status(200).json(rows);
    })
    .catch((err) => console.log(err));
};

exports.action = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "validation failed!",
      errors: errors.array(),
    });
  }
  const { licensePlate, carTypeId, clientId, receiptDate } = req.body;
  let car = new Car(licensePlate, carTypeId, clientId, receiptDate);
  car.action();
  res.status(201).json({
    // data: car, need id
    message: "Record created successfully",
  });
};

exports.delete = (req, res, next) => {
  const carId = req.params.id;
  Car.delete(carId)
    .then((result) => {
      res.status(202).json({
        message: "Record deleted successfully",
      });
    })
    .catch((err) => console.log(err));
};
