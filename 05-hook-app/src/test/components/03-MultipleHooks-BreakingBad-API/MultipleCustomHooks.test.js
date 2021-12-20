import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-MultipleHooks-BreakingBad-API/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
	let wrapper;

	const fillWrapper = () => {
		useCounter.mockReturnValue({
			counter: 10
			// increment: () => {},
			// decrement: () => {}
		});
		useFetch.mockReturnValue({ data: null, loading: true, error: null }); //al usar el mock para que no compruebe el useFetch
		wrapper = shallow(<MultipleCustomHooks />);
	};

	beforeEach(() => fillWrapper());

	test("Deberia mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Deberia mostrar la información", () => {
		useFetch.mockReturnValue({
			data: [{ author: "Mario", quote: "Hola Mundo" }],
			loading: false,
			error: null
		});
		wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper.find(".alert").exists()).toBe(false);
		expect(wrapper.find("p").text().trim()).toBe("Hola Mundo");
		expect(wrapper.find("footer").text().trim()).toBe("Mario");
	});
});
