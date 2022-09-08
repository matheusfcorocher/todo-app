import React, { useState } from 'react';
import '../../../App';
import './checkbox.css';

interface CheckboxProps {
    handleOnChange: () => void,
    checked: boolean,
    className?: string,
}

function Checkbox({
    handleOnChange,
    checked,
    className
}: CheckboxProps) {
    return (
        <label
            htmlFor="checked"
            className={`checkbox`}
        >
            <input
                type="checkbox"
                role="checkbox"
                name="checked"
                className="checkbox-input"
                checked={checked}
                onChange={() => handleOnChange()}
            />
        </label>
    );
}

export default Checkbox;
