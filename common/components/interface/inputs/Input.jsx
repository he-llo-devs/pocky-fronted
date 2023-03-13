import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Input = (props) => {

    const { display, type, name, id, value, handleValue, placeholder, icon, errors, className, maxLength, pattern, disabled} = props;
    
    const [visible, setVisible] = useState(false);

    const handleVisibility = () => {
        setVisible(!visible);
    }

    let style = 'floatingInput-wrapper';

    if(errors?.length > 0) {
        errors.map(error => {
            if(error.target == id) style = 'floatingInput-wrapper-error';
        })
    }

    return (
        <div>
            <div className={style}>
                <div className="flex flex-col grow">
                    <label htmlFor={id} className="floatingInput-label select-none">{display || ""}</label>
                    <input type={type == 'password' ? visible ? 'text' : 'password' : type} name={name} id={id} value={value} onChange={handleValue} placeholder={placeholder} className={`floatingInput-input ${className || ""}`} maxLength={maxLength || null} pattern={pattern} disabled={disabled || false}/>
                </div>
                <FontAwesomeIcon icon={type == 'password' ? visible ? faEye : faEyeSlash : icon} onClick={type == 'password' ? handleVisibility : null} className={type == 'password' ? 'cursor-pointer select-none' : ''}/>
            </div>
            {
                errors?.length > 0 ? errors.map((error, index) => {
                    if(error.target == id) {
                        return (
                            <p key={index} className="text-red-400">{error.msg}</p>
                        )
                    }
                }) : null
            }
        </div>
    );
}
 
export default Input;