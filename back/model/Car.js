const db = require("../util/database");

module.exports = class User {
  constructor(licensePlate, carTypeId, clientId, receiptDate) {
    this.licensePlate = licensePlate;
    this.carTypeId = carTypeId;
    this.clientId = clientId;
    this.receiptDate = receiptDate;
  }

  action(id) {
    if (id) {
      return db.execute(
        "UPDATE car SET licensePlate = ?, carTypeId = ?, clientId = ?, receiptDate = ? WHERE id = ?",
        [this.licensePlate, this.carTypeId, this.clientId, this.receiptDate, id]
      );
    }
    return db.execute(
      "INSERT INTO car(licensePlate, carTypeId, clientId, receiptDate) VALUES (?, ?, ?)",
      [this.licensePlate, this.carTypeId, this.clientId, this.receiptDate]
    );
  }

  static getAll() {
    return db.execute("SELECT * FROM car");
  }

  static getDetails(id) {
    return db.execute("SELECT * FROM car WHERE id = ?", [id]);
  }

  static delete(id) {
    return db.execute("DELETE FROM car WHERE id = ?", [id]);
  }
};
