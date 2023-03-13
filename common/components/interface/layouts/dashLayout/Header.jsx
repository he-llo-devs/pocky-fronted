import ThemeToggle from "@/interface/toggles/ThemeToggle";

import UserStatus from "../../navigation/UserStatus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const DashHeader = ({ warehouseName, warehouse, name, lastname, role }) => {
    return (
        <div className="sticky md:mx-10 top-0 md:pt-4 md:mb-4 rounded-b-2xl backdrop-blur-sm bg-gray-100/90 dark:bg-gray-900 z-30">
            <div className="h-14 bg-white/90 dark:bg-gray-800/90 shadow-lg shadow-transparent/5 dark:shadow-transparent/20 backdrop-blur-sm flex justify-between items-center rounded-2xl px-5 transition-colors">
                <div className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <span className="font-bold">{warehouseName || '...'}</span>
                    <div className="max-w-[160px] md:max-w-none">
                        { warehouse ? 
                            <p className="truncate">, {warehouse || '...'}</p>
                        : null }
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <div className="border-0 md:border-r space-x-4 px-0 md:px-4">
                        <ThemeToggle/>
                        {/*<Link href="#">
                            <a>
                                <FontAwesomeIcon icon={faBell}/>
                            </a>
                        </Link>*/}
                    </div>
                    
                    <div className="hidden md:block">
                        <UserStatus name={name} lastname={lastname} role={role}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default DashHeader;