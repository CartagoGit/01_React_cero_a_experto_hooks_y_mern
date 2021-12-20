// import React from "react";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifts", () => {
	test("Deberia retornar el estado inicial", async () => {
		console.log("------> " + expect.getState().currentTestName + " <------");

		const { result, waitForNextUpdate } = renderHook(() => {
			return useFetchGifs("Categoria");
		});
		// console.log(result.current);

		const { data, loading } = result.current;
		await waitForNextUpdate();
		// const { data, loading } = useFetchGifs('Categoria');
		// console.log(data, loading);

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test("Debe retornar un array de imgs y el loading en false", async () => {
		console.log("------> " + expect.getState().currentTestName + " <------");

		const { result, waitForNextUpdate } = renderHook(() => {
			return useFetchGifs("Categoria");
		});
		await waitForNextUpdate();
		const { data, loading } = result.current;

		expect(data.length).toEqual(10);
		expect(loading).toBe(false);
	});
});
