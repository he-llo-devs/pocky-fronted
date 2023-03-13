import useAuth from "@/modules/auth/hooks/useAuth";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import SideBar from "./Sidebar";
import TabBar from "./TabBar";

const DashLayout = ({children}) => {
    const year = new Date().getFullYear();
    const { user } = useAuth();

    return (
        <div className="flex max-w-384 mx-auto">
            <SideBar/>
            <div className="w-full flex flex-col justify-between">
                <Header 
                    name={user ? user.name : null} 
                    lastname={user ? user.lastname : null} 
                    role={user ? user.role.name : null} 
                    warehouseName={user ? user.organization.name : null}
                    warehouse={user ? user.warehouse ? user.warehouse.name : null : null}
                />
                <div className="grow min-h-screen md:min-h-0">
                    {children}
                </div>
                <div className="px-5 md:px-10 h-14 flex justify-between items-center">
                    <p>© {year} he-llo.  Todos los derechos reservados</p>
                    <FontAwesomeIcon icon={faHeart} className="text-primary"/>
                </div>
                <TabBar/>
            </div>
        </div>
    )

}
 
export default DashLayout;