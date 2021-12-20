import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Pruebas en hook useFetch", () => {
	let result;
	let waitForNextUpdate;
	let data;
	let loading;
	let error;
	// let urlCl;
	beforeEach(() => fillData());

	const fillData = (counter = 1) => {
		const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
		// urlCl = url;
		({ result, waitForNextUpdate } = renderHook(() => useFetch(url)));
		({ data, loading, error } = result.current);
	};

	test("Deberia retornar la informacion por defecto", () => {
		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(null);
	});

	test("Deberia obtener la info deseada, loading false, error, false", async() => {
		// await act(async()=>await waitForNextUpdate());
		await waitForNextUpdate({timeout:5000});
		({ data, loading, error } = result.current);
		expect(data.length).toBe(1);
		expect(loading).toBe(false);
		expect(error).toBe(null);
	});

	test("Deberia manejar el error en el fetch", async() => {
		fillData(-1);
		// await act(async()=>await waitForNextUpdate());
		await waitForNextUpdate({timeout:5000});
		({ data, loading, error } = result.current);
		// console.log(urlCl);
		// console.log(result.current);
		expect(data).toBe(null);
		expect(loading).toBe(false);
		expect(error).not.toBe(null);
		// console.log(error);
	});
});
