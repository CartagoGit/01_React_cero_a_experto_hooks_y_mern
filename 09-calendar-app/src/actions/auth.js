// authChecking: '[auth] Checking Login State',
// 	authCheckingFinish: '[auth] finish checking Login State',
// 	authStartLogin: '[auth] Start Login',
// 	authLogin: '[auth] Login',
// 	authStartRegister: '[auth] Start Register',
// 	authRegister: '[auth] Register',
// 	authStartTokenRenew: '[auth] Start Token JWT renew',
// 	authLogout: '[auth] Logout',

import Swal from "sweetalert2";
import { fetchNoToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const authStartLogin = (email, password) => {
	return async (dispatch) => {
		const resp = await fetchNoToken("auth", { email, password }, "POST");

		const body = await resp.json();
		if (body.ok) {
			setStorageToken(body);
			dispatch(
				login({
					uid: body.uid,
					name: body.name
				})
			);
		} else errorHandle(body, dispatch);
	};
};

export const authStartRegister = (name, email, password) => {
	return async (dispatch) => {
		const resp = await fetchNoToken(
			"auth/new",
			{ name, email, password },
			"POST"
		);
		const body = await resp.json();

		if (body.ok) {
			setStorageToken(body);
			dispatch(
				login({
					uid: body.uid,
					name: body.name
				})
			);
		} else errorHandle(body, dispatch);
	};
};

export const authStartChecking = () => {
	return async (dispatch) => {
		const resp = await fetchWithToken("auth/renew", {}, "GET");
		const body = await resp.json();

		if (body.ok) {
			setStorageToken(body);
			dispatch(
				login({
					uid: body.uid,
					name: body.name
				})
			);
		} else dispatch(checkingFinish());
	};
};

export const startLogout = () => {
	return (dispatch) => {
		localStorage.clear();
		dispatch(logout());
	};
};

const login = (user) => {
	return { type: types.authLogin, payload: user };
};

const checkingFinish = () => {
	return { type: types.authCheckingFinish };
};

const logout = () => {
	return { type: types.authLogout };
};

const errorHandle = (body, dispatch) => {
	// localStorage.setItem("token", null);
	// localStorage.setItem("token-init-date", null);
	localStorage.clear();
	dispatch(checkingFinish);
	Swal.fire("Error", body.msg, "error");
};

const setStorageToken = (body) => {
	localStorage.setItem("token", body.token);
	localStorage.setItem("token-init-date", new Date().getTime());
};
