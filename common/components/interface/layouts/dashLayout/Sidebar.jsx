import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";

import NavItem from "../../navigation/NavItem";
import NavDropdown from "../../navigation/NavDropdown";
import MenuItems from "@/common/utils/MenuItems";

import useAuth from "@/modules/auth/hooks/useAuth";
import useInterface from "@/hooks/useInterface";

import { 
    faChevronDown,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const DashSideBar = () => {
    const { user } = useAuth();
    const { businessTexts } = useInterface();
    const menu = MenuItems(businessTexts);
    
    const [navbar, setNavbar] = useState({
        full: true,
        active: 'home',
    })

    const [dropdown, setDropdown] = useState({
        activeItem: '',
        activeClass: 'bg-gray-800 text-gray-200',
        expandedClass: 'border-l border-gray-200 ml-4 pl-4',
        shrinkedClass: 'sm:absolute top-0 left-20 sm:shadow-md sm:z-10 sm:bg-white sm:rounded-lg sm:p-4 border-l sm:border-none border-gray-400 ml-4 pl-4 sm:ml-0 w-48 dark:bg-gray-800',
    });

    const handleNavbar = () => {
        setNavbar({
            ...navbar,
            full: !navbar.full
        })
    }

    const handleDropdown = e => {
        if(dropdown.activeItem == e.currentTarget.id) {
            setDropdown({
                ...dropdown,
                activeItem: ''
            })
            return;
        }

        setDropdown({
            ...dropdown,
            activeItem: e.currentTarget.id
        })
    }

    return (
        <div className="pl-0 md:pl-4 py-4 h-screen sticky top-0 z-30">
            <div className={`hidden shadow-lg shadow-transparent/5 rounded-2xl md:flex md:flex-col md:justify-between h-full bg-white dark:bg-gray-800 transition-all duration-300 space-y-2 ${navbar.full ? ' w-60' : 'w-60 sm:w-20'} ${!navbar.full ? 'top-0 -left-64 sm:left-0' : null}`}>
                <div className="min-h-[56px] flex items-center justify-center">
                    <h4 className="header4 font-black select-none"><span className="text-primary">S</span>{navbar.full ? 'AMARA' : null}<span className="text-primary">.</span></h4>
                </div>
                
                {/*Sidebar toggle*/}
                <button className="absolute focus:outline-none -right-3 top-14 bg-gray-800 dark:bg-gray-700 rounded-full shadow-md w-6 h-6 flex items-center justify-center" onClick={handleNavbar}>
                    <FontAwesomeIcon icon={faChevronDown} size="xs" className={`transition-all duration-300 transform text-white ${navbar.full ? 'rotate-90' : '-rotate-90'}`}/>
                </button>

                <div className={`px-4 space-y-2 ${navbar.full ? 'grow pt-4 overflow-auto' : ''}`}>
                    {
                        menu.map((e, index) => {
                            if(user?.role?.role_id <= e.roles) {
                                if(e.path) {
                                    return(
                                        <NavItem key={index} navbar={navbar} name={e.name} path={e.path} icon={e.icon}/>
                                    )
                                } else {
                                    return (
                                        <NavDropdown key={index} navbar={navbar} name={e.name} icon={e.icon} items={e.items} dropdown={dropdown} handleClick={handleDropdown} />
                                    )
                                }
                            }
                        })
                    }
                </div>
                <div className="px-4">
                    <div className="relative mb-4">
                        <Link href='/terms'>
                            <div className={`relative flex ${!navbar.full ? 'justify-center' : 'justify-between'} items-center p-2 hover:text-primary-800 hover:bg-primary-50 rounded-md cursor-pointer`}>
                                <div className="flex items-center space-x-2">
                                    <FontAwesomeIcon icon={faInfoCircle} size={navbar.full ? 'sm' : null}/>
                                    <p className={`text-xs truncate ${navbar.full ? '': 'hidden'}`}>Términos & condiciones</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default DashSideBar;