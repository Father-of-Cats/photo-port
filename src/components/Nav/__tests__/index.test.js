import React from 'react';
import { render, cleanup, getByTestId } from'@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

afterEach(cleanup);

// Does it Render?
describe('nav component', () => {
    // Baseline
    it('renders', () => {
        render(<Nav />);
    });
    // snapshot
    it('matches DOM snapshot', () => {
        const { asFragment } = render(<Nav/>);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// Testing by using getByLabelText to test aria-label
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav/>);
        // expect aria-label "camera" to have content of x
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    });
})

describe('links are visible', () => {
  it('inserts text into the links', () => {
        // get by data-testid
        // looking for id best practice over class or more general option
    const { getByTestId } = render(<Nav />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})