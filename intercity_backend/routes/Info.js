const express = require("express");
const router = express.Router();

const { getStations, searchTrain } = require("../controllers/infoController");

router.get("/stations", getStations);
router.get("/trains", searchTrain);

module.exports = router;
