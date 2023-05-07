const Enum = require("enum");

const GEAR_STATUS = new Enum({ 0: "عادي", 1: "أوتوماتيك", 3: "كلاهما" });

module.exports = GEAR_STATUS;
