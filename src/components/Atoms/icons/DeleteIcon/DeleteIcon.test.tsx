import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import DeleteIcon from './DeleteIcon';

describe("::Components ::Atoms ::DeleteIcon", () => {
    test('renders icon of DeleteIcon', () => {
        render(<DeleteIcon />);
        const icon = screen.getByRole("image");
        expect(icon).toMatchSnapshot();
    })
})
