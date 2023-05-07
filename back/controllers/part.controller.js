const db = require("../util/database");

module.exports = class Part {
  constructor() {}

  action(id) {
    if (id) {
      return db.execute("UPDATE ...");
    } else {
      return db.execute("INSERT INTO subjecttype(...) VALUES(....)");
    }
  }
};
