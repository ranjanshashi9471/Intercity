import { useNavigate } from "react-router-dom";

export default function Home(props) {
	const navigate = useNavigate();
	return (
		<div className="home-header vh-100 pt-5 mt-5">
			<div className="col-lg-5 my-auto home-text mx-auto card bg-light bg-opacity-50 fw-bold mt-5">
				<h1 className="fw-bold fs-1 lh-5 px-5 py-3">
					Travel to your dream Locations with Sheer Comfort and Luxury.
				</h1>
				<div className="mx-auto mb-3">
					<button
						className="btn btn-lg btn-info me-3"
						onClick={() => navigate("/login")}
					>
						Login
					</button>
					<button
						className="btn btn-lg btn-dark"
						onClick={() => navigate("/signup")}
					>
						Signup
					</button>
				</div>
			</div>
		</div>
	);
}
