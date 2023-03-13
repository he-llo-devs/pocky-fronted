import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const TextArea = ({label, name, id, value, handleValue, placeholder, errors, className, maxLength, rows, disabled}) => {
    let style = 'input1';

    if(errors?.length > 0) {
        errors.map(error => {
            if(error.target == id) style = 'input1-error';
        })
    }

    return (
        <div className={className || null}>
            <label htmlFor={id} className="select-none">{label}</label>
            <div className="relative">
                <textarea name={name} id={id} value={value} onChange={handleValue} placeholder={placeholder} className={` resize-none ${style} ${disabled ? 'bg-gray-100 dark:bg-gray-700' : ''}`} maxLength={maxLength || null} rows={rows} disabled={disabled || false}/>
            </div>
            {
                errors?.length > 0 ? errors.map((error, index) => {
                    if(error.target == id) {
                        return (
                            <p key={index} className="text-red-400 ml-1">{error.msg}</p>
                        )
                    }
                }) : null
            }
        </div>
    );
}
 
export default TextArea;