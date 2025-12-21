import { useState } from 'react';
import './InputField.css';
import type { Validator } from '../../types/Validator';


function InputField(props: { label: string, defaultValue: string, onChange: (newValue: string) => void, validate?: Validator, hint?: string }) {
    const [value, setValue] = useState(props.defaultValue);

    const errorMessage = props.validate ? props.validate(value) : undefined;

    return <div className="input-field">
        <label className="input-field__label" htmlFor="">{props.label}</label>
        <input className="input-field__input" name="" id="" defaultValue={value} onChange={e => setValue(e.target.value)} />
        {errorMessage ? (
            <p className="input-field__hint">{errorMessage}</p>
        ) : (
            <p className="input-field__hint">{props.hint}</p>
        )}
    </div>
}

export default InputField;
