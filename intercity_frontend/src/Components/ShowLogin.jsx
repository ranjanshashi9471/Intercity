import { NavLink } from "react-router-dom";

export default function HeaderLogin() {
	return (
		<div className="">
			<li>
				<NavLink className="nav-link mx-1 py-0" to="/login">
					Login
				</NavLink>
			</li>
			<li>
				<NavLink className="nav-link mx-1 py-0" to="/signup">
					Sign up
				</NavLink>
			</li>
		</div>
	);
}
