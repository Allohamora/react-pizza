import React from "react";
import { shallow } from "enzyme";
import { Counter } from "../src/Counter";

describe("<Counter />", () => {
    let wrapper = shallow(<Counter />);

    const setState = jest.fn();
    const useStateSpy = jest.spyOn<any, any>(React, "useState");
    useStateSpy.mockImplementation(state => [state, setState]);

    beforeEach(() => {
        wrapper = shallow(<Counter />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("add", () => {
        wrapper.find(".add").simulate("click");
        expect(setState).toHaveBeenCalledWith(1);
    });

    it("remove", () => {
        wrapper.find(".remove").simulate("click");
        expect(setState).toBeCalledWith(-1);
    })
});