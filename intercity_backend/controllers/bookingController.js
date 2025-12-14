const db = require("../config/db");

const bookTickets = async (req, res) => {
	try {
		const { train_no, passengers, doj, start_stn, end_stn } = req.body;
		const pass_count = passengers.length;

		//check for available tickets
		try {
			const chk_query = `select count(*) as ticket_booked from ticket_pass ts, (select ticket_no from tickets where train_no = ${train_no} and date_of_journey = ${doj}) tkts where ts.ticket_no = tkts.ticket_no) book, (select count(coach_seats.*) from coach_seats where coach_seats.coach_no in (select coach_no from act_coaches where train_no = ${train_no}));`;
			await db.query("");
		} catch (error) {}
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Internal Server Error!!",
		});
	}
};

module.exports = { bookTickets };