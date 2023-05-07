const db = require("../../util/database");

module.exports = class Part {
  constructor(id, name, subjectId, carTypeId) {
    this.id = id;
    this.name = name;
    this.subjectId = subjectId;
    this.carTypeId = carTypeId;
  }

  async action() {
    // if (this.id) {
    //   const { insertId } = await db.execute(
    //     "UPDATE subjectType SET name = ?, subjectId = ?, carTypeId = ? WHERE id = ?",
    //     [this.name, this.subjectId, this.carTypeId, this.id]
    //   );
    //   return {
    //     id: insertId,
    //     name: this.name,
    //     subjectId: this.subjectId,
    //     carTypeId: this.carTypeId,
    //   };
    // } else {
    const res = await db.execute(
      "INSERT INTO subjectType(id, name, subjectId, carTypeId) VALUES (?, ?, ?, ?)",
      [this.id, this.name, this.subjectId, this.carTypeId]
    );
    console.log(res[0].insertId);
    return {
      id: res[0].insertId,
      name: this.name,
      subjectId: this.subjectId,
      carTypeId: this.carTypeId,
    };
    // }
  }

  static getAll() {
    return db.execute("SELECT * FROM subjectType");
  }

  static getDetails() {
    return db.execute("SELECT * FROM subjectType WHERE id = ?", [this.id]);
  }

  static delete() {
    return db.execute("DELETE FROM subjectType WHERE id = ?", [this.id]);
  }
};
