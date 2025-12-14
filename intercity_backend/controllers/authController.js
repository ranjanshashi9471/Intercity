const bcrypt = require("bcrypt");
const db = require("../config/db");

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log(req.body);
		const getUserQuery = `SELECT user_id, name, password from users WHERE email = '${email}'`;
		let data = null;
		try {
			data = await db.query(getUserQuery);
		} catch (error) {
			console.log(error);
			res.status(500).send({
				success: false,
				message: "Db Error, Please try again!!",
			});
		}

		if (data[0].length == 0) {
			console.log("User doesn't exist!!");
			res.status(200).send({
				success: false,
				message: "You are not registered!!",
			});
		} else {
			console.log(data[0][0].user_id.toString("hex"));
			try {
				const match = await bcrypt.compare(password, data[0][0].password);
				if (match) {
					res.status(200).send({
						success: true,
						message: "Successful Login",
						userData: {
							id: data[0][0].user_id.toString("hex"),
							name: data[0][0].name,
							email: email,
							userType: data[0][0].user_type,
						},
					});
				} else {
					res.status(200).send({
						success: false,
						message: "Please Check Email or Password!!",
					});
				}
			} catch (error) {
				console.log(error);
				res.status(500).send({
					success: false,
					message: "Error Hash Comparison!!",
				});
			}
		}
	} catch (error) {
		console.log("try catch error", error);
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

const registerUser = async (req, res) => {
	console.log(req.body);
	try {
		const { name, email, password, dob } = req.body;
		const birthdate = new Date(dob);

		if (!birthdate) {
			console.log("DOB error!!");
			res.status(200).send({
				success: 200,
				message: "Input Error!!",
			});
			return;
		}

		const curr_date = new Date();
		let age = curr_date.getFullYear() - birthdate.getFullYear();
		const m = curr_date.getMonth() - birthdate.getMonth();
		if (m < 0 || (m === 0 && curr_date.getDate() < birthdate.getDate())) {
			age--;
		}

		// const passengerType =
		// 	age >= 18 ? (age <= 60 ? "adult" : "senior-citizen") : "child";

		if (age < 18) {
			console.log("Below Legal Age");
			res.status(200).send({
				success: false,
				message: "Below Legal Age!!",
			});
			return;
		}

		const chkExisting = await db.query(
			`SELECT * FROM users WHERE email = '${email}'`
		);
		if (chkExisting[0].length > 0) {
			//user exists
			res.status(200).send({
				success: false,
				messsage: "User already Exists!",
			});
		} else {
			//user doesn't exists
			let hashedPassword = null;
			try {
				hashedPassword = await bcrypt.hash(password, 10);
			} catch (error) {
				res.status(500).send({
					success: false,
					message: "Error Hashing Password!!",
				});
			}

			if (hashedPassword) {
				const userRegisterQuery = `INSERT INTO users(user_id, name, dob, email, user_type, password) values (UNHEX(REPLACE(UUID(),"-","")), '${name}', '${dob}', '${email}', "user",'${hashedPassword}')`;

				try {
					const result = await db.execute(userRegisterQuery);
					console.log(result);
					res.status(200).send({
						success: true,
						message: "Registered Successfully!!",
					});
				} catch (error) {
					console.log(error);
					res.status(500).send({
						success: false,
						message: "Registration Failed!!",
					});
				}
			}
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: error.message,
		});
	}
};

module.exports = { loginUser, registerUser };
