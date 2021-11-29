import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en GifGrid.js", () => {
	let wrapper;

	const fillWrapper = (cat = "un string", dat = [], load = true) => {
		useFetchGifs.mockReturnValue({
			data: dat,
			loading: load
		});
		wrapper = shallow(<GifGrid category={cat} />);
	};
	beforeEach(() => fillWrapper());

	test("Deberia comparar el snapshoot ", () => {
		console.log("------> " + expect.getState().currentTestName + " <------");

		expect(wrapper).toMatchSnapshot();
	});

	test("Deberia mostrar items cuando se cargan imagenes con el hook useFetchGifs ", () => {
		console.log("------> " + expect.getState().currentTestName + " <------");

		const gifs = [
			{ id: "ABC", url: "https://cualquiercosa.jpg", title: "Cualquier titulo" },
            { id: "CBA", url: "https://cualquiercosa.jpg", title: "Cualquier titulo" }
		];
		fillWrapper("una categoria cualquiera", gifs, false);

        expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
