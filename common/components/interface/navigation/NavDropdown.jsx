import { useRouter } from "next/router";
import Tooltip from "../misc/Tooltip";
import ConditionalWrapper from "../misc/ConditionalWrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavDropdown = (props) => {
    const router = useRouter();
    const {navbar, name, items, icon, dropdown, handleClick } = props;
    let activeClass = '';

    items.map((e) => {
        if(router.pathname == e.path ) {
            activeClass = 'font-bold bg-primary-50 text-primary-700'
            return;
        }
    })

    return (
        <ConditionalWrapper condition={!navbar.full} wrapper={children => <Tooltip text={name}>{children}</Tooltip>}>
            <div className="relative transition-all">
                {/*Drowdown display*/}
                <div className={`relative transition-all flex ${!navbar.full ? 'justify-center' : 'justify-between'} ${activeClass} items-center hover:font-semibold rounded-md cursor-pointer`} id={name} onClick={handleClick}>
                    <div className="flex items-center space-x-4 hover:translate-x-1 transition-all p-2">
                        <FontAwesomeIcon icon={icon}/>
                        <p className={`select-none ${navbar.full ? '': 'hidden'}`}>{name}</p>
                    </div>
                    <div className={`${navbar.full ? '': 'hidden'} ${ dropdown.activeItem === name ? '-rotate-180' : ''} transition-all duration-300 mr-2`}>
                        <FontAwesomeIcon icon={faChevronDown} size="xs"/>
                    </div>
                </div>
                {/*Dropdown content*/}
                <div className={`space-y-2 pt-2 ${dropdown.activeItem !== name ? 'hidden' : ''} ${navbar.full ? dropdown.expandedClass : dropdown.shrinkedClass}`} onMouseOver={e => e.stopPropagation()}>
                    {
                        items.map((e, index) => (
                            <div key={index} className="hover:font-semibold hover:translate-x-1 transition-all cursor-pointer">
                                <Link href={e.path} className={`select-none flex items-center space-x-2 ${router.pathname == e.path ? 'text-primary-600 dark:text-primary-400' : null}`}>
                                    <FontAwesomeIcon icon={e.icon} size="xs"/>
                                    <p>{e.name}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </ConditionalWrapper>
    );
}
 
export default NavDropdown;