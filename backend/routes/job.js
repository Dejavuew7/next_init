const express = require("express");
const router = express.Router();

const jobController = require("../controller/jobController");

router.post("/post", jobController.Post);

module.exports = router;
