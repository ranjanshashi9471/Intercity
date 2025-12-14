import rail from "../images/rail.png";
import { NavLink, Outlet } from "react-router-dom";
import ShowLogout from "./ShowLogout";
import ShowLogin from "./ShowLogin";

export default function Header(props) {
	return (
		<div className="">
			<nav className="navbar navbar-expand-lg text-light">
				<div className="container-fluid fs-4">
					<NavLink className="navbar-brand" to="/">
						<img className="" src={rail} alt="logo-img" width={"50"} />
						<strong className="fs-2 text-light"> IET</strong>
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="#">
									About Us
								</NavLink>
							</li>
							{/* <li className="nav-item">
								<NavLink className="nav-link" to="#"></NavLink>
							</li> */}
							<li className="nav-item dropdown">
								<NavLink
									className="nav-link dropdown-toggle"
									to="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									{props.loggedIn ? props.serverUserData.name : "Username"}
								</NavLink>
								<ul className="dropdown-menu bg-dark bg-opacity-75">
									{props.loggedIn ? (
										<ShowLogout setLoggedIn={props.setLoggedIn} />
									) : (
										<ShowLogin />
									)}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Outlet/>
		</div>
	);
}
