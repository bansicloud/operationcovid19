import React, { useState } from 'react';

export const TextInput = (props) => {
    const [text, setText] = useState(props.value)

    const setValue = (v) => {
        setText(v.target.value);
        props.setValue(v.target.value);
    }

    return (
        <>
            <label>{props.label}</label>
            <input type={props.type || "text"} value={text} onChange={(v) => setValue(v)} className="form-control" />
        </>
    )
}