// authChecking: '[auth] Checking Login State',
// 	authCheckingFinish: '[auth] finish checking Login State',
// 	authStartLogin: '[auth] Start Login',
// 	authLogin: '[auth] Login',
// 	authStartRegister: '[auth] Start Register',
// 	authRegister: '[auth] Register',
// 	authStartTokenRenew: '[auth] Start Token JWT renew',
// 	authLogout: '[auth] Logout',

import { types } from "../types/types";

const initialState = {
	checking: true
	// uid: null,
	// name: null
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.authLogin:
			return { ...state, ...action.payload, checking: false };
		case types.authCheckingFinish:
			return { ...state, checking: false };
		case types.authLogout:
			return { checking: false };
		default:
			return state;
	}
};
