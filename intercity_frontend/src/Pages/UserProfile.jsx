import userImage from "../images/user.png";

export default function UserProfile(props) {
	const user = props.userData;
	// const [testimonialIndex, setTestimonialIndex] = useState(0);

	return (
		<div className="m-4 bg-secondary bg-opacity-75 col-md-8 mx-auto">
			<div className="text-center d-flex flex-column justify-content-center">
				<h1 className="fw-bold mt-2">User Profile</h1>

				<div className="under-line bg-info mt-1 mx-auto"></div>

				<div className="mx-auto w-50">
					<div className="card mt-5 shadow my-5 w-100">
						<div className="mt-3 pt-5">
							<div className="position-relative ms-4">
								<div className="image-container">
									<img className="w-100" src={userImage} alt="Avatar" />
								</div>
								<div className="image-background"></div>
							</div>

							<div className="m-5 w-100">
								<p className="text-center fs-2 fw-bold text-uppercase">
									{user.name}
								</p>
								<div className="mt-2 w-100 bg-info"></div>
								<p className="">{user.userType.toUpperCase()}</p>
								<p className="text-info text-opacity-50 mt-0 pt-0 fw-bold">
									{user.email}
								</p>
								<p className="text-opacity-50 text-primary-emphasis mt-0 pt-0 fw-bold">
									{user.id}
								</p>
							</div>
							<div></div>
							{/* <div className="text-info mt-3">
						<FaQuoteLeft />
					</div>
					<div className=" text-dark text-opacity-50">
						<p>{review.text}</p>
					</div>
					<div className="text-info">
						<FaQuoteRight />
					</div> */}
						</div>

						{/* <div className="text-info-emphasis m-3">
					<button
						onClick={handlePrevious}
						className="border-0 p-2 bg-transparent me-2"
					>
						<GrPrevious />
					</button>
					<button
						onClick={handleNext}
						className="border-0 p-2 bg-transparent ms-2"
					>
						<GrNext />
					</button>
				</div> */}

						<div className="">
							<button className="btn btn-sm btn-info mb-2">Edit Profile</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
