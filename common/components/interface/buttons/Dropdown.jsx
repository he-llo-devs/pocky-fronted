import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { faChevronDown, faDotCircle } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ children, className = "", style = "default", items = [] }) => {
    const styles = {
        default: {
            button : 'rounded-lg text-white bg-gray-500 dark:bg-gray-600 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',           
            activeItem: 'bg-gray-500 dark:bg-gray-700 text-white',
            icon: '',
            activeIcon: '',
        },
        primary: {
            button : 'rounded-lg text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',           
            activeItem: 'bg-primary-600 dark:bg-primary-600 text-white',
            icon: '',
            activeIcon: ''
        },
    }

    const selectedStyle = styles[style || 'default'];

    return (
        <Menu as="div" className={`relative inline-block text-left`}>
            <Menu.Button className={`${className} ${selectedStyle.button} font-medium `}>
                {children}
                <FontAwesomeIcon icon={faChevronDown} className="ml-2 -mr-1 h-5 w-5" aria-hidden="true"/>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items as="div" className="absolute z-30 w-52 p-1 right-0 mt-1 origin-top-right rounded-lg bg-white dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {
                        items.map((item, index) => {
                            if (!item.isHidden) {
                                return (
                                    <Menu.Item key={index}>
                                        {({ active }) => (
                                            <a
                                                className={`space-x-2 w-full flex items-center whitespace-nowrap px-4 py-2 rounded-md ${ active ? selectedStyle.activeItem : 'dark:text-white'}`}
                                                href={item.url || '#'}
                                                onClick={item.handleClick || null}
                                            >
                                                <FontAwesomeIcon icon={item.icon || faDotCircle} className={`w-4 ${ active ? selectedStyle.FontAwesomeIcon : selectedStyle.icon}`}/>
                                                <span>{item.name || ''}</span>
                                            </a>
                                        )}
                                    </Menu.Item>
                                )
                            } else {
                                return null;
                            }
                        })
                    }

                </Menu.Items>
            </Transition>
        </Menu>
    );
}
 
export default Dropdown;