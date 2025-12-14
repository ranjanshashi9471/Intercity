import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Logout(props) {
	const naviagte = useNavigate();
	function handleLogout() {
		props.setLoggedIn(false);
		toast.success("Loggedout");
		naviagte("/");
	}
	return (
		<div>
			<li>
				<NavLink className="nav-link mx-1 py-0" to="/userprofile">
					Account Info
				</NavLink>
			</li>
			<li>
				<hr className="dropdown-divider my-1"></hr>
			</li>
			<li>
				<NavLink className="nav-link mx-1 py-0" onClick={handleLogout}>
					Log out
				</NavLink>
			</li>
		</div>
	);
}
