import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

const TabItem = ({icon, items, limit, className}) => {
    return ( 
        <Menu as="div" className="relative">
            <Menu.Button>
                <FontAwesomeIcon icon={icon} />
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
                <Menu.Items as="div" className={`absolute ${limit == 1 ? "-right-4" : limit == 2 ? '-right-12' : "-left-12"} bottom-12 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none bg-gray-50 dark:bg-gray-900 backdrop-blur-sm transition-colors ${className}`}>
                    {
                        items ? items.map((e, index) => (
                            <div key={index} className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link href={e.path} className={`${active ? "bg-green-600 text-white" : ""} group flex w-full items-center rounded-md px-2 py-2 select-none leading-5  whitespace-nowrap`}>
                                            <FontAwesomeIcon 
                                                icon={e.icon}
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                            {e.name}
                                        </Link>
                                    )}
                                </Menu.Item>
                            </div>

                        )) : null
                    }
                    
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
 
export default TabItem;