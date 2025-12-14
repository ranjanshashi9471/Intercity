import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import login from "../images/log-in.png";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	async function submitHandler(data) {
		try {
			const response = await axios.post("/Auth/login", data, {
				headers: {
					"Content-Type": "application/json",
				},
				mode: "cors",
			});

			if (!response.data.success) {
				toast.error(response.data.message);
			} else {
				toast.success(response.data.message);
				props.setLoggedIn(true);
				props.setServerUserData({ ...response.data.userData });
				navigate("/dashboard");
			}
		} catch (error) {
			toast.error("Error Sending network request!!");
			console.log(error);
		}
	}

	return (
		<div className="text-dark">
			<div className="row mx-3 my-5">
				<div className="col-sm-4 mx-auto my-4 p-4 bg-light bg-opacity-25 border rounded shadow signin_form">
					<div className="">
						<main className="form-signin w-100">
							<form id="loginform" onSubmit={handleSubmit(submitHandler)}>
								<img
									className="mb-3"
									src={login}
									alt=""
									width="72"
									height="57"
								/>
								<h1 className="h3 mb-2 fw-normal text-warning">
									Please Signin
								</h1>

								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
										{...register("email", {
											required: true,
											pattern: {
												value:
													/^[^\.\s][\w\-_.]*[^\.\s]@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
												message: "Not a Valid Email",
											},
										})}
									/>
									<label for="floatingInput">Email address</label>
									{errors.email && (
										<p className="text-danger">{errors.email.message}</p>
									)}
								</div>
								<div className="form-floating mt-3">
									<input
										type="password"
										id="floatingPassword"
										className="form-control"
										placeholder="Password"
										{...register("password", {
											required: true,
											minLength: { value: 7, message: "Min length 7" },
											maxLength: { value: 15, message: "Max Length 15" },
										})}
									/>
									<label for="floatingPassword">Password</label>
									{errors.password && (
										<p className="text-danger pt-2">
											{errors.password.message}
										</p>
									)}
								</div>
								<div className="mt-3">
									<button className="btn btn-success w-100 py-2" type="submit">
										Signin
									</button>
									<div className="row mx-auto mt-1">
										<div className="col">
											<hr></hr>
										</div>
										<div className="col">
											<p className="text-warning">New user</p>
										</div>
										<div className="col">
											<hr></hr>
										</div>
									</div>

									<NavLink className="btn btn-dark w-100 py-2" to="/signup">
										Signup
									</NavLink>
								</div>
							</form>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
}

{
	/* <div className="form-floating mb-3">
									<select
										required
										className="form-control"
										id="selectOptions"
										placeholder="Choose a User Type."
										{...register("userType")}
									>
										<option value={"passengers"}>Passenger</option>
										<option value={"travel_agents"}>Agent</option>
										<option value={"staffs"}>Staff</option>
									</select>
									<label for="selectOptions">Type of user</label>
								</div> */
}
