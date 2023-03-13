import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import useTheme from "@/hooks/useTheme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
    const {theme, switchTheme} = useTheme();
    const [enabled, setEnabled] = useState(null);

    useEffect(()=>{
        if(theme) {
            setEnabled(false);
            return;
        }
        
        setEnabled(true);
    },[theme])

    return (
        <Switch
            onChange={() => {
                setEnabled(!enabled)
                switchTheme();
            }}
            className={`${
                enabled ? "bg-gray-200" : "bg-gray-700"
            }
          relative inline-flex flex-shrink-0 items-center justify-around h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span className="sr-only">Use setting</span>
            <span className="flex w-full justify-around">
                <FontAwesomeIcon icon={faMoon} size="sm"/>
                <FontAwesomeIcon icon={faSun} size="sm"/>
            </span>
            <span
                aria-hidden="true"
                className={`${
                    enabled
                        ? "translate-x-3 bg-gray-700"
                        : "-translate-x-3 bg-lightBackground"
                }
            pointer-events-none inline-block h-[20px] w-[20px] rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 absolute`}
            />
        </Switch>
    );
};

export default ThemeToggle;
