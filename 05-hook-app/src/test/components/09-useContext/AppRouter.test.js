/* eslint-disable */

import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <AppRouter />>", () => {
	const user = { id: 1, name: "Mario" };
	let wrapper;
	const fillWrapper = () => {
		wrapper = mount(
			<UserContext.Provider value={{ user }}>
				<AppRouter />
			</UserContext.Provider>
		);
	};

	beforeEach(() => fillWrapper());

	test("Deberia mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
