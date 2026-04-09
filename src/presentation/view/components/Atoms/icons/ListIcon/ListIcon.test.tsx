import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ListIcon from './ListIcon';

describe("::Components ::Atoms ::ListIcon", () => {
    test('renders icon of ListIcon', () => {
        render(<ListIcon />);
        const icon = screen.getByRole("img");
        expect(icon).toMatchSnapshot();
    })
})
