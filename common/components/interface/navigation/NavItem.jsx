import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import ConditionalWrapper from "../misc/ConditionalWrapper";
import Tooltip from "../misc/Tooltip";

const NavItem = ({navbar, icon, name, path}) => {
    const router = useRouter();
    return (
        <ConditionalWrapper condition={!navbar.full} wrapper={children => <Tooltip text={name}>{children}</Tooltip>}>
            <div className="relative">
                <Link href={path}>
                    <div className={`relative flex ${!navbar.full ? 'justify-center' : 'justify-between'} ${router.pathname.includes(path) ? 'font-bold bg-primary-50 text-primary-700' : null} items-center hover:font-semibold rounded-md select-none cursor-pointer`}>
                        <div className="flex items-center space-x-4 hover:translate-x-1 transition-all p-2">
                            <FontAwesomeIcon icon={icon}/>
                                <span className={`${navbar.full ? '': 'hidden'}`}>{name}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </ConditionalWrapper>
    );
}
 
export default NavItem;