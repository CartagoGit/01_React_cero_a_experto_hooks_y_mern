import React from "react";
import "@testing-library/jest-dom";
import { shallow, simulate } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe("Pruebas en <RealExampleRef />>", () => {
	let wrapper;

	const fillWrapper = () => {
		wrapper = shallow(<RealExampleRef />);
	};
	beforeEach(() => fillWrapper());

	test("Deberia mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("MultipleCustomHooks").at(0).exists()).toBe(false);
	});

	test("Deberia mostrar el componente <MultipleCustomHooks />", () => {
		wrapper.find("button").at(0).simulate("click");
		// console.log(wrapper.find("MultipleCustomHooks").at(0).html());
		expect(wrapper.find("MultipleCustomHooks").at(0).exists()).toBe(true);
	});
});
