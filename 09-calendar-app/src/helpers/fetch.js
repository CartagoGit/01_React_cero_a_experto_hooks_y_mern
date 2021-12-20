import Swal from "sweetalert2";

const baseUrl = process.env.REACT_APP_API_URL;

export const fetchNoToken = (endpoint, data, method = "GET") => {
	try {
		const url = `${baseUrl}/${endpoint}`;
		if (method === "GET") return fetch(url);
		else {
			return fetch(url, {
				method,
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(data)
			});
		}
	} catch (error) {
		Swal.fire(
			"Error",
			`Ha habido un problema al cargar la base de datos. Contacte con su administrador:\n ${error}`,
			"error"
		);
	}
};

export const fetchWithToken = (endpoint, data, method = "GET") => {
	try {
		const url = `${baseUrl}/${endpoint}`;
		const token = localStorage.getItem("token") || "";
		if (method === "GET")
			return fetch(url, {
				method,
				headers: {
					"x-token-jwt": token
				}
			});
		else {
			return fetch(url, {
				method,
				headers: {
					"Content-type": "application/json",
					"x-token-jwt": token
				},
				body: JSON.stringify(data)
			});
		}
	} catch (error) {
		Swal.fire(
			"Error",
			`Ha habido un problema al cargar la base de datos. Contacte con su administrador:\n ${error}`,
			"error"
		);
	}
};
