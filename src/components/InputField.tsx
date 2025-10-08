import type { HTMLInputTypeAttribute } from "react"

type InputFieldProps = {
    label: string
    defaultValue?: string | number | readonly string[]
    feedback?: string
    type: HTMLInputTypeAttribute
}


function InputField({ label, type, defaultValue, feedback }: InputFieldProps) {
    return <div className="input-field">
        <p className="input-field__label">{label}</p>
        <input className="input-field__input" type={type} defaultValue={defaultValue} />
        <span className="input-field__feedback">{feedback}</span>
    </div>
}

export default InputField;