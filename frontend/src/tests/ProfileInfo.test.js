import { render, screen } from '@testing-library/react';

import ProfileInfo from '../Components/ProfileInfo';


describe(`ProfileInfo component tests`, () => {
    beforeEach(() => {
        render(<ProfileInfo />);

    });
    test(`it should render users name`, () => {
        const element = screen.getByText(/Name/i);
        expect(element).toBeInTheDocument();
    })
    test('it should render personal email', () => {
        const element = screen.getByText(/Personal email/i);
        expect(element).toBeInTheDocument();
    })
})