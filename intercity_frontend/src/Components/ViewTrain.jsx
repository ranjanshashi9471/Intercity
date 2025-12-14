export default function ViewTrain(props) {
	const {
		route_name,
		total_dist_km,
		journey_time,
		train_no,
		train_name,
		start_stn,
		end_stn,
		depart_time,
		arr_time,
	} = props.data;

	const handleClick = (event) => {
		//network request
	};

	return (
		<div className="row" onClick={handleClick}>
			<div className="card text-start bg-tertiary">
				<h5 className="card-header">
					<span>Route info: </span>
					{/* <span className="ms-1">{props.data.route_no} </span> */}
					<span className="text-warning-emphasis">{route_name} </span>
					<span className="ms-1"> '{total_dist_km} KM'</span>
					<span className="ms-1">Total time- {journey_time} </span>
				</h5>
				<div className="card-body">
					<h5 className="card-title mb-0">
						<span>{train_no} </span>
						<span className="">{train_name} </span>
						<span> {start_stn + " "}</span>- <span>{end_stn + " "}</span>
						<span className="text-danger">{" " + depart_time}</span>
						<span className="text-success">{" - " + arr_time}</span>
					</h5>
				</div>
			</div>
		</div>
	);
}
