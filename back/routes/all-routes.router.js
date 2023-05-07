const express = require("express");

const router = express.Router();

const routes = [
  {
    client: {
      getAll: "/client/getAll",
      action: "/client/action",
    },
    part: {
      getAll: "/part/getAll",
      action: "/part/action",
    },
  },
];

router.get("/", (req, res) => res.json({ routes }));

module.exports = router;
