import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../auth/authContext";

export const PrivateRoutes = ({ children }) => {
	const { user } = useContext(AuthContext);
	const location = useLocation();

    localStorage.setItem('lastPath',`${location.pathname}${location.search}`)

	return user.logged ? children : <Navigate to='/login' />;
};
