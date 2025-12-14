const db = require("../config/db");

const getStations = async (req, res) => {
	try {
		const data = await db.query(
			"SELECT station_code, station_name from stations"
		);
		console.log(data[0]);
		res.status(200).json({
			success: true,
			message: "successful",
			data: data[0],
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: error.message,
			data: {},
		});
	}
};

const searchTrain = async (req, res) => {
	try {
		console.log(req.query);
		const { startStn, endStn, date } = req.query;
		const result = await db.query(
			`select t.*, dt.* from trains t, (select * from routes where start_stn = '${startStn}' and end_stn = '${endStn}') dt where dt.route_no = t.route_no;`
		);
		if (result[0].length == 0) {
			res.status(200).json({
				success: false,
				message: "No Trains Found!!",
				trainData: {},
			});
		} else {
			console.log(result[0]);
			res.status(200).json({
				success: true,
				message: "Successfully fetched trains",
				trainData: result[0],
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: error.message,
			trainData: {},
		});
	}
};

module.exports = { getStations, searchTrain };
