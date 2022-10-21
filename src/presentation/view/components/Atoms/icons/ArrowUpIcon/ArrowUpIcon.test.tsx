import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ArrowUpIcon from './ArrowUpIcon';

describe("::Components ::Atoms ::ArrowUpIcon", () => {
    test('renders icon of ArrowUpIcon', () => {
        render(<ArrowUpIcon />);
        const icon = screen.getByRole("image");
        expect(icon).toMatchSnapshot();
    })
})
