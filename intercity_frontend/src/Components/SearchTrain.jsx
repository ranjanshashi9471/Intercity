import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ViewTrain from "./ViewTrain";

export default function SearchTrain() {
	let curr_date = new Date();
	const [searchData, setSearchData] = useState({
		startStn: "",
		endStn: "ADI",
		date: "",
	});
	let [trainData, setTrainData] = useState([]);
	const [stnData, setStnData] = useState([]);

	async function handleSubmit(event) {
		event.preventDefault();
		console.log(searchData);
		await axios
			.get("/info/trains", {
				method: "cors",
				params: searchData,
			})
			.then((res) => {
				console.log(res);
				if (res.data.success) {
					toast.success(res.data.message);
					setTrainData(res.data.trainData);
					console.log(res.data.trainData);
				} else {
					toast.error(res.data.message);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setSearchData((prev) => {
			return { ...prev, [name]: value };
		});
	}

	async function getStations() {
		await axios
			.get("/info/stations", {
				method: "cors",
			})
			.then((res) => {
				console.log(res);
				if (res.data.success) {
					setStnData(res.data.data);
					toast.success("Fetched Stations");
				} else {
					toast.error("Database Error!!");
				}
			})
			.catch((err) => {
				toast.error("Get Error");
				console.log(err);
			});
	}

	useEffect(() => {
		getStations();
	}, []);

	return (
		<div className="row">
			<div className="col-lg-4 mx-auto">
				<div className="col-lg-12 p-5 rounded bg-secondary border shadow bg-opacity-50 mt-2">
					<h3 className="text-light">Search for trains Between Stations.</h3>
					<div>
						<form onSubmit={handleSubmit}>
							<div className="form-floating mx-auto mb-3">
								<select
									required
									className="form-control"
									name="startStn"
									id="selectOptions"
									placeholder="Choose start station"
									onChange={handleChange}
									value={searchData.startStn}
								>
									{stnData.map((stn, index) => {
										return (
											<option key={index} value={stn.station_code}>
												{stn.station_name}
											</option>
										);
									})}
								</select>
								<label for="selectOptions">Enter Start Stn</label>
							</div>
							<div className="form-floating mx-auto mb-3">
								<select
									required
									className="form-control"
									name="endStn"
									id="selectOptions1"
									placeholder="Choose destn. station"
									onChange={handleChange}
									value={searchData.endStn}
								>
									{stnData.map((stn, index) => {
										return (
											<option key={index} value={stn.station_code}>
												{stn.station_name}
											</option>
										);
									})}
								</select>
								<label for="selectOptions1">Enter End Stn</label>
							</div>
							<div className="form-floating mx-auto mb-3">
								<input
									type="date"
									className="form-control"
									id="floatingInput"
									value={curr_date.toLocaleDateString("fr-CA")}
								/>
								<label for="floatingInput">Choose DOJ</label>
							</div>
							<button className="btn btn-dark w-100 py-2" type="submit">
								Find Trains
							</button>
						</form>
					</div>
				</div>
			</div>
			{trainData.length > 0 ? (
				<div className="col-lg-6 mx-auto mt-2">
					{trainData.map((train, index) => {
						return <ViewTrain key={index} data={train} />;
					})}
				</div>
			) : (
				""
			)}
		</div>
	);
}
