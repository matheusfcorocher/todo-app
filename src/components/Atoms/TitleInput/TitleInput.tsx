import React, { forwardRef } from 'react';
import '../../../App';
import './title-input.css';

interface TitleInputProps {
    props: {
        handleOnChange: () => void,
        handleOnFocus: () => void,
        handleOnBlur: () => void,
        title:  string,
        className?: string,
    },
    ref?:  React.LegacyRef<HTMLInputElement>,
}

function TitleInput({
    props,
    ref
}: TitleInputProps) {
    return (
        <label
            htmlFor="title"
            aria-label={props?.title}
            className="title"
        >
            <input
                type="text"
                role="textbox"
                value={props.title}
                className={`title-input`}
                ref={ref}
                onChange={() => props?.handleOnChange()}
                onFocus={() => props?.handleOnFocus()}
                onBlur={() => props?.handleOnBlur()}
            />
        </label>
    );
}

export default forwardRef(TitleInput);
