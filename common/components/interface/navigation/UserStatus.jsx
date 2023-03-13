import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import useAuth from "@/modules/auth/hooks/useAuth";
import Avatar from "../../../components/interface/avatars/Avatar";
import Link from "next/link";

import { 
    faCircleQuestion, 
    faGear, 
    faHeadset, 
    faIndustry, 
    faSignOut, 
} from "@fortawesome/free-solid-svg-icons";

const UserStatus = ({ name, lastname, role }) => {
    const { logOut } = useAuth();

    return (  
        <Popover className="relative">
            <Popover.Button className="flex items-center focus:outline-none">
                <div className="text-right mr-4">
                    <p className="font-semibold">{name || '...'} {lastname || '...'}</p>
                    <p className="font-light text-sm leading-3 text-gray-600 dark:text-white">{role || '...'}</p>
                </div>
                <div className="w-10">
                    <Avatar status={'active'}/>
                </div>
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <Popover.Panel className="absolute font-medium w-48 right-0 top-14 z-10 border dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                    <div className="flex flex-col">
                        <Link href='/settings/account/profile' className="flex items-center space-x-3 m-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-1">
                            <FontAwesomeIcon icon={faGear} className="w-4"/>
                            <p>Cuenta</p>
                        </Link>
                        <Link href='/settings/organization/profile' className="flex items-center space-x-3 m-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-1">
                            <FontAwesomeIcon icon={faIndustry} className="w-4"/>
                            <p>Organización</p>
                        </Link>
                        <Link href='/about' className="flex items-center space-x-3 m-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-1">
                            <FontAwesomeIcon icon={faCircleQuestion} className="w-4"/>
                            <p>Acerca de</p>
                        </Link>
                        <Link href='https://wa.me/593989742588' target="_blank" className="flex items-center space-x-3 m-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-1">
                            <FontAwesomeIcon icon={faHeadset} className="w-4"/>
                            <p>Soporte</p>
                        </Link>
                        <Link href='/logout' className="flex items-center space-x-3 m-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-1" onClick={e => logOut()}>
                            <FontAwesomeIcon icon={faSignOut} className="w-4"/>
                            <p>Cerrar Sesión</p>
                        </Link>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
 
export default UserStatus;