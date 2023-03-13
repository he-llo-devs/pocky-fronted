import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import useTheme from "@/hooks/useTheme";

const Toggle = ({checked, onChange, className}) => {

    return (
        <Switch
            checked={checked}
            onChange={onChange}
            className={`${
                checked ? "bg-primary-600" : "bg-gray-200 dark:bg-gray-600"
            }
          relative inline-flex items-center justify-around h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 ${className || ''}`}
        >
            <span className="sr-only">Use toggle</span>
            
            <span
                aria-hidden="true"
                className={`${
                    checked
                        ? "translate-x-3 bg-white"
                        : "-translate-x-3 bg-gray-600 dark:bg-white"
                }
            pointer-events-none inline-block h-5 w-5 rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 absolute`}
            />
        </Switch>
    );
};

export default Toggle;
