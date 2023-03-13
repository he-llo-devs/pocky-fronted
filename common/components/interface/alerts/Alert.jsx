import { faCheckCircle, faCircleDot, faCircleExclamation, faCircleInfo, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const Alert = ({ type, title, msg, isShowing, className}) => {
    const config = {
        success: {
            wrapper: 'dark:ring-green-900',
            iconBox: 'bg-primary-600',
            title: 'text-primary-600',
            icon: faCheckCircle
        },
        error: {
            wrapper: 'dark:ring-red-900',
            iconBox: 'bg-red-500',
            title: 'text-red-500',
            icon: faTriangleExclamation
        },
        warning: {
            wrapper: 'dark:ring-orange-800',
            iconBox: 'bg-orange-500 dark:bg-orange-600',
            title: 'text-orange-500 dark:text-orange-600',
            icon: faCircleExclamation
        },
        info: {
            wrapper: 'dark:ring-sky-800',
            iconBox: 'bg-sky-500 dark:bg-sky-600',
            title: 'text-sky-500 dark:text-sky-600',
            icon: faCircleInfo
        },
        default: {
            wrapper: 'dark:ring-gray-700',
            iconBox: 'bg-gray-500 dark:bg-gray-400',
            title: 'text-gray-500 dark:text-gray-400',
            icon: faCircleDot
        }
    }

    return (
        <Transition
            show={isShowing}
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-[3000ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className={`fixed z-20 top-16 md:top-auto md:bottom-12 lg:bottom-4 right-2 md:right-4 my-2 flex w-4/5 md:w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 dark:shadow-lg ring-1 ring-inset ring-gray-200 ${config[type || 'default'].wrapper} ${className}`}>
                <div className={`flex items-center justify-center w-12 ${config[type || 'default'].iconBox}`}>
                    <FontAwesomeIcon icon={config[type || 'default'].icon} size="xl" className="text-white dark:text-gray-800"/>
                </div>
                
                <div className="px-4 py-2 -mx-3">
                    <div className="mx-3">
                        <span className={`font-semibold ${config[type || 'default'].title}`}>{title || '...'}</span>
                        <p className="text-sm text-gray-600 dark:text-gray-200">{msg || '...'}</p>
                    </div>
                </div>
            </div>
        </Transition>
    );
}
 
export default Alert;