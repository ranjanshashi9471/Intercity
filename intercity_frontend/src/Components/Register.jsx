import { NavLink, useNavigate } from "react-router-dom";
import login from "../images/add-user.png";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Register() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({});

	const navigate = useNavigate();

	async function onSubmit(formData) {
		try {
			const response = await axios.post("/Auth/register", formData, {
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(response);
			if (!response.data.success) {
				toast.error(response.data.message);
			} else {
				toast.success(response.data.message);
				navigate("/login");
			}
		} catch (error) {
			console.log(error);
			toast.error("Error Sending Request!!");
		}
	}

	return (
		<div>
			<div className="row mx-5 my-5">
				<div className=" col-lg-5 mx-auto border rounded shadow bg-light bg-opacity-25 signin_form">
					<div className="px-4">
						<main className="form-signin w-100 my-3">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="">
									<img
										className="mb-2"
										src={login}
										alt=""
										width="72"
										height="57"
									/>
								</div>

								<h1 className="h3 mb-2 fw-normal text-warning">
									Please Signup
								</h1>

								<div className="form-floating mb-2">
									<input
										type="text"
										className="form-control"
										id="floatingName"
										placeholder="Your name here"
										{...register("name", {
											required: true,
											minLength: { value: 3, message: "Min Lenngth is 3" },
											maxLength: { value: 50, message: "Max Length is 50" },
										})}
									/>
									<label htmlfor="floatingName">Name</label>
									{errors.name && (
										<p className="text-danger">{errors.name.message}</p>
									)}
								</div>

								<div className="form-control">
									<label for="dob">
										Date of birth<sup className="text-danger">*</sup>
									</label>
									<input
										required
										type="date"
										id="dob"
										className="form-control"
										{...register("dob", {
											required: { value: true, message: "Dob is required!!" },
										})}
									/>
									{errors.dob && <p>{errors.dob.message}</p>}
								</div>

								<div className="form-floating mt-2">
									<input
										type="email"
										className="form-control"
										id="floatingEmail"
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
									<label for="floatingEmail">Email address</label>
									{errors.email && (
										<p className="text-danger">{errors.email.message}</p>
									)}
								</div>
								<div className="form-floating mt-3">
									<input
										type="password"
										className="form-control"
										id="floatingPassword"
										placeholder="Password"
										{...register("password", {
											required: true,
											minLength: { value: 7, message: "Min length 7" },
											maxLength: { value: 15, message: "Max Length 15" },
										})}
									/>
									<label for="floatingPassword">Password</label>
									{errors.password && (
										<p className="text-danger">{errors.password.message}</p>
									)}
								</div>

								<div className="mt-3">
									<button className="btn btn-success w-100 py-2" type="submit">
										Signup
									</button>
									<p className="text-warning mt-2">Already registered</p>
									<NavLink className="btn btn-dark w-100 py-2" to="/login">
										Signin
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