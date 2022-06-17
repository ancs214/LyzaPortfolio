import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

//declare categories and props from component
const mockFormState = jest.fn();
const mockSetFormState = jest.fn();
const mockErrorMessage = jest.fn();
const mockSetErrorMessage = jest.fn();

afterEach(cleanup);

describe('Contact component', () => {
    //baseline test
    it('renders', () => {
        render(<Contact
            mockFormState={mockFormState}
            mockSetFormState={mockSetFormState}
            mockErrorMessage={mockErrorMessage}
            mockSetErrorMessage={mockSetErrorMessage}
            />);
    });
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit');
    })
})