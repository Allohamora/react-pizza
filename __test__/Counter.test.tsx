import React from "react";
import { shallow } from "enzyme";
import { Counter } from "Counter";
import { delay } from "./helpers";

const countText = (count: number) => `Counter: ${count}`;

describe("<Counter />", () => {
    let wrapper = shallow(<Counter />);
    let count = () => wrapper.find(".count").text();

    beforeEach(() => {
        wrapper = shallow(<Counter />);
        count = () => wrapper.find(".count").text();
    });

    it("increment", () => {
        expect(count()).toEqual(countText(0));

        wrapper.find(".increment").simulate("click");

        expect(count()).toEqual(countText(1));
    });

    it("decrement", () => {
        expect(count()).toEqual(countText(0));

        wrapper.find(".decrement").simulate("click");

        expect(count()).toEqual(countText(-1));
    });

    it("asyncIncrement", async () => {
        expect(count()).toEqual(countText(0));

        wrapper.find(".asyncIncrement").simulate("click");

        await delay(1000);

        expect(count()).toEqual(countText(1));
    })
});