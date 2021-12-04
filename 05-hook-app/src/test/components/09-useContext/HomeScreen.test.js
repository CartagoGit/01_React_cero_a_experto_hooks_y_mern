/* eslint-disable */

import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen.js";
import { UserContext } from "../../../components/09-useContext/UserContext.js";

describe("Pruebas en <HomeScreen />>", () => {
    const user = {
        name: 'Mario',
        email: 'unemail@cualquiera.com'
    }
	let wrapper;
	const fillWrapper = () => {
		wrapper = mount(
			<UserContext.Provider value={{user}}>
				<HomeScreen />
			</UserContext.Provider>
		);
	};

	beforeEach(() => fillWrapper());

	test("Deberia mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
