import "./App.css";
import Signin from "./Pages/Signin";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import Signup from "./Pages/Signup";
import UserProfile from "./Pages/UserProfile";
import Admin from "./Pages/Admin";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [serverUserData, setServerUserData] = useState({});

	return (
		<div className="home-header">
			<Routes>
				<Route
					path="/"
					element={
						<Header
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
							serverUserData={serverUserData}
							setServerUserData={setServerUserData}
						/>
					}
				>
					<Route index element={<Home />} />
					<Route
						path="/login"
						element={
							<Signin
								setLoggedIn={setLoggedIn}
								setServerUserData={setServerUserData}
							/>
						}
					/>
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/userprofile"
						element={
							<PrivateRoute loggedIn={loggedIn}>
								<UserProfile userData={serverUserData} />
							</PrivateRoute>
						}
					/>
					<Route path="*" element={<NotFound />} />
					<Route
						path="/dashboard"
						element={
							<PrivateRoute loggedIn={loggedIn}>
								<Dashboard serverUserData={serverUserData} />
							</PrivateRoute>
						}
					/>
					{/* <Route path="/sys/admin" element={<Admin />} /> */}
				</Route>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
