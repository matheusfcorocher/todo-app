import { render, screen, cleanup } from '@testing-library/react';
import Button from './Button';

describe("::Components ::Atoms ::Button", () => {
    test('renders Button', () => {
        render(<Button handleFunction={function (): void {
            throw new Error('Function not implemented.');
        }}/>);
        const icon = screen.getByRole("button");
        expect(icon).toMatchSnapshot();
    })
})
