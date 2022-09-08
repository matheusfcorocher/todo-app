import React, { useEffect, useRef, useState } from 'react';
import '../../../App';
import './title-input.css';

interface TitleInputProps {
    handleOnChange: () => void,
    handleOnFocus: () => void,
    handleOnBlur: () => void,
    title:  string,
    ref?:  React.MutableRefObject<HTMLInputElement>,
    className?: string,
}

function TitleInput({
    handleOnChange,
    handleOnFocus,
    handleOnBlur,
    title,
    ref,
    className
}: TitleInputProps) {
    return (
        <label
            htmlFor="title"
            aria-label={title}
            className="title"
        >
            <input
                type="text"
                role="textbox"
                value={title}
                className={`title-input`}
                ref={ref}
                onChange={() => handleOnChange()}
                onFocus={() => handleOnFocus()}
                onBlur={() => handleOnBlur()}
            />
        </label>
    );
}

export default TitleInput;
