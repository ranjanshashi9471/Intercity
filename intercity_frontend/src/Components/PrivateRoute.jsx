import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
	if (props.loggedIn) {
		return props.children;
	} else {
		return <Navigate to="/login" />;
	}
}
