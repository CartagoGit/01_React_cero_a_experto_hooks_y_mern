/* eslint-disable */

import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext.js";

describe("Pruebas en <LoginScreen />", () => {
    const setUser = jest.fn();
	let wrapper;
	const fillWrapper = () => {
		wrapper = mount(
			<UserContext.Provider value={{ setUser }}>
				<LoginScreen />
			</UserContext.Provider>
		);
	};

	beforeEach(() => fillWrapper());

	test("Deberia mostrarse ", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe ejecutar el setUser con el argumento esperado", () => {
		wrapper.find("button").simulate("click");
        expect(setUser).toHaveBeenCalledWith({ id: 123214, name: 'MarioJouu' });
	});
});
