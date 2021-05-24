import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "./App";

import { shallow } from 'enzyme';

describe("Counter Testing", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("render the title of counter", () => {
        expect(wrapper.find('h1').text()).toContain("This is a counter app");

        /*const { getByText } = render(<App />);
        const linkElement = getByText("This is a counter app");
        expect(linkElement).toBeInTheDocument();*/
    });

    it("render a button with text of 'increment'", () => {
        expect(wrapper.find('#increment-btn').text()).toBe('Increment');
    });

    it("render the initial value of state in a div", () => {
        expect(wrapper.find('#counter-value').text()).toBe("0");
    });

    it("render the click event of increment button and increment counter value", () => {
        wrapper.find("#increment-btn").simulate("click");
        expect(wrapper.find("#counter-value").text()).toBe("1");
    });

    it("render a button with text of 'decrement'", () => {
        expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
    });

    it("render the click event of decrement button and decrement counter value", () => {
        wrapper.find("#increment-btn").simulate("click");
        expect(wrapper.find("#counter-value").text()).toBe("1");
        wrapper.find("#decrement-btn").simulate("click");
        expect(wrapper.find("#counter-value").text()).toBe("0");
    });
})