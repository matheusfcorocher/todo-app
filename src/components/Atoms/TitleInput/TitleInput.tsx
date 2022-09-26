import React, { forwardRef, useEffect, useState } from 'react';
import '../../../App';
import { handleUpdateTodoTitle } from '../../../App';
import './title-input.css';

interface TitleInputProps {
    handleOnChange: handleUpdateTodoTitle,
    handleOnFocus: () => void,
    handleOnBlur: () => void,
    title: string,
    id: string,
    className?: string,
}

const TitleInput = forwardRef<HTMLInputElement, TitleInputProps>(
    (props, ref) => {
        const [text, setText] = useState<string>(props.title);  
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
                    value={text}
                    className={`title-input`}
                    ref={ref}
                    onChange={(e) => {
                        setText(e.target.value);
                        props?.handleOnChange(props?.id, text);
                    }}
                    onFocus={() => props?.handleOnFocus()}
                    onBlur={() => {
                        props?.handleOnChange(props?.id, text);
                        props?.handleOnBlur();
                    }}
                    onKeyDown={(event) => handlePress(event)}
                />
            </label>
        )
    });

export default TitleInput;
