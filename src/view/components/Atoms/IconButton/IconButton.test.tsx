import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import IconButton from './IconButton';

describe("::Components ::Atoms ::IconButton", () => {
    test('renders IconButton', () => {
        render(<IconButton handleFunction={function (): void {
            throw new Error('Function not implemented.');
        } } children={undefined} />);
        const icon = screen.getByRole("button");
        expect(icon).toMatchSnapshot();
    })
})
