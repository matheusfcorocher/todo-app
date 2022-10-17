import React, { forwardRef } from 'react';
import './title-input.css';

type handleOnChangeFunction = (...args: any[]) => any;

interface TitleInputProps {
    handleOnChange: handleOnChangeFunction,
    handleOnFocus: () => void,
    handleOnBlur: () => void,
    title: string,
    id: string,
    className?: string,
}

const TitleInput = forwardRef<HTMLInputElement, TitleInputProps>(
    (props, ref) => {
        function handlePress(event : React.KeyboardEvent<HTMLInputElement>) {
            if(event.key == "Enter") {
                event.currentTarget.blur();
            }
        }

        return (
            <label
                htmlFor="title"
                aria-label={props.title}
                className="title"
            >
                <input
                    type="text"
                    role="textbox"
                    value={props.title}
                    className={`title-input`}
                    ref={ref}
                    onChange={(e) => {
                        props?.handleOnChange(props?.id, e.target.value);
                    }}
                    onFocus={() => props?.handleOnFocus()}
                    onBlur={() => {
                        props?.handleOnBlur();
                    }}
                    onKeyDown={(event) => handlePress(event)}
                />
            </label>
        )
    });

export default TitleInput;
