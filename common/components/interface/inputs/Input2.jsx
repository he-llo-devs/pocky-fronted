import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Input2 = ({label, type, name, id, value, handleValue, placeholder, icon, errors, className, maxLength, min, max, step, disabled, labelClassName}) => {
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
        <div className={`mb-4 ${className}`}>
            <div className="flex items-center">
                <label htmlFor={id} className={`select-none ${labelClassName || 'w-28'}`}>{label}</label>
                <div className="relative flex-1">
                    { icon ? <FontAwesomeIcon icon={icon} className="absolute top-1/2 transform -translate-y-1/2 left-3"/> : null }
                    { type == 'password' ? <FontAwesomeIcon icon={type == 'password' ? visible ? faEye : faEyeSlash : icon} onClick={type == 'password' ? handleVisibility : null} className={`${type == 'password' ? 'cursor-pointer select-none' : ''} absolute top-1/2 transform -translate-y-1/2 right-3`}/> : null }
                    <input 
                        type={type == 'password' ? visible ? 'text' : 'password' : type} 
                        name={name} 
                        id={id} 
                        value={value} 
                        onChange={handleValue} 
                        placeholder={placeholder} 
                        className={`${style} ${icon ? 'pl-9' : null} ${type== 'password' ? 'pr-9' : null} ${disabled ? 'bg-gray-100 dark:bg-gray-700' : ''}`} 
                        maxLength={maxLength || null}
                        min={min || null} 
                        max={max || null} 
                        step={step || null} 
                        disabled={disabled || false}
                    />
                </div>
            </div>
            <div className="flex">
                <div>
                    <div className={`${labelClassName || ''}`}/>
                </div>
                <div>
                    {
                        errors?.length > 0 ? errors.map((error, index) => {
                            if(error.target == id) {
                                return (
                                    <p key={index} className="text-red-400 pl-1">{error.msg}</p>
                                )
                            }
                        }) : null
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Input2;