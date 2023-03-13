import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Input1 = ({label, type, name, id, value, handleValue, placeholder, icon, errors, className, maxLength, disabled, min, max, step}) => {
    const [visible, setVisible] = useState(false);

    const handleVisibility = () => {
        setVisible(!visible);
    }

    let style = 'input1';

    if(errors?.length > 0) {
        errors.map(error => {
            if(error.target == id) style = 'input1-error';
        })
    }

    return (
        <div className={className || null}>
            <label htmlFor={id} className="select-none flex-none">{label}</label>
            <div className="relative">
                { icon ? <FontAwesomeIcon icon={icon} className={`absolute top-1/2 transform -translate-y-1/2 left-3 ${disabled ? 'text-gray-400 dark:text-gray-500' : ''}`}/> : null }
                { type == 'password' ? <FontAwesomeIcon icon={type == 'password' ? visible ? faEye : faEyeSlash : icon} onClick={type == 'password' ? handleVisibility : null} className={`${type == 'password' ? 'cursor-pointer select-none' : ''} absolute top-1/2 transform -translate-y-1/2 right-3`}/> : null }
                <input 
                    type={type == 'password' ? visible ? 'text' : 'password' : type} 
                    name={name} 
                    id={id} 
                    value={value} 
                    onChange={handleValue} 
                    placeholder={placeholder} 
                    className={`${style} ${icon ? 'pl-9' : null} ${type =='password' ? 'pr-9' : null} ${disabled ? 'bg-gray-100 dark:bg-gray-700' : ''}`} 
                    maxLength={maxLength || null} 
                    min={min || null} 
                    max={max || null} 
                    step={step || null} 
                    disabled={disabled || false}
                />
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
 
export default Input1;