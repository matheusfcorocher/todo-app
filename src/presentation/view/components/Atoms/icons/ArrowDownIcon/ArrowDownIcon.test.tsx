import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ArrowDownIcon from './ArrowDownIcon';

describe("::Components ::Atoms ::ArrowDownIcon", () => {
    test('renders icon of ArrowDownIcon', () => {
        render(<ArrowDownIcon />);
        const icon = screen.getByRole("image");
        expect(icon).toMatchSnapshot();
    })
})
