import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
	const { setUser } = useContext(UserContext);

	const login = () => {
		setUser({ id: 123214, name: 'MarioJouu' });
	};

	return (
		<>
			<h1>Login Screen</h1>
			<hr />
			<button className='btn btn-primary' onClick={login}>
				Login
			</button>
		</>
	);
};
