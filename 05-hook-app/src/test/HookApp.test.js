
import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas en <HookApp />", () => {
    let wrapper;

    const fillWrapper = () => {
        wrapper = shallow(<HookApp />);
    };
    beforeEach(() => fillWrapper());

    test("Deberia cargar el snapshoot", () => {
        expect(wrapper).toMatchSnapshot();
    });

});
