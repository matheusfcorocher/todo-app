import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CheckListIcon from './CheckListIcon';

describe("::Components ::Atoms ::CheckListIcon", () => {
    test('renders icon of CheckListIcon', () => {
        render(<CheckListIcon />);
        const icon = screen.getByRole("image");
        expect(icon).toMatchSnapshot();
    })
})
