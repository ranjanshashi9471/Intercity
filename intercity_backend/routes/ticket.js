const router = require("express").Router();
const { bookTickets } = require("../controllers/bookingController");

router.post("/booktickets", bookTickets);

module.exports = router;
