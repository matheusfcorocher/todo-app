import React, { useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import TitleInput from './TitleInput';

describe("::Components ::Atoms ::TitleInput", () => {
    test('renders TitleInput', () => {
        render(<TitleInput handleOnChange={function (): void {
            throw new Error('Function not implemented.');
        } } handleOnFocus={function (): void {
            throw new Error('Function not implemented.');
        } } handleOnBlur={function (): void {
            throw new Error('Function not implemented.');
        } } title={''} />);
        const titleInput = screen.getByRole("textbox");
        expect(titleInput).toMatchSnapshot();
    })
})
