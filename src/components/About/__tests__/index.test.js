import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";

// Ensures that after each test their is no left over data to give following tests false results
afterEach(cleanup);

describe('About component', () => {
 // First Test, does it render?
 // First arg in describe() declares what is being tested i.e. 'it'
    it('renders', () => {
        render(<About />);
    });
    
 // Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

// render - renders the component in a simulated DOM in a node.js environment. nothing is actually visibly rendered
// cleanup is used to remove components from the DOM to prevent memory leaking, as well as variable data collisions between tests

