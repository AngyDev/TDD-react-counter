import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "./App";

describe("Counter Testing", () => {
    it("render the title of counter", () => {
        const { getByText } = render(<App />);
        const linkElement = getByText("This is a counter app");
        expect(linkElement).toBeInTheDocument();
    })
})