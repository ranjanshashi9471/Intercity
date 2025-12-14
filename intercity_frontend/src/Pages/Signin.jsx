// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
import Login from "../Components/Login";

export default function SigninPage(props) {
	return (
		<div className="">
			<Login
				setLoggedIn={props.setLoggedIn}
				setServerUserData={props.setServerUserData}
			/>
		</div>
	);
}
