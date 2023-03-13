import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubDropDown = (props) => {
    const {name, icon, items } = props;

    const [subdropdown, setSubdropdown] = useState({
        open: false,
        activeClass: 'bg-gray-800 text-gray-200'
    })

    const handleSubdropdown = () => {
        setSubdropdown({
            ...subdropdown,
            open: !subdropdown.open,
        })
    }

    return (  
        <div className="relative w-full">
            <div className="flex items-center justify-between cursor-pointer" onClick={handleSubdropdown}>
                <p className="hover:text-green-800 cursor-pointer">{name}</p>
                <div className={`${subdropdown.open ? '-rotate-180' : ''} transition-all duration-300`}>
                    <FontAwesomeIcon icon={icon} size="xs"/>
                </div>
            </div>
            <div className={` ml-4 ${!subdropdown.open ? 'hidden' : ''}`}>
                {
                    items.map((e, index ) => (
                        <p key={index} className="hover:text-green-800 cursor-pointer">{e.name}</p>
                    ))
                }
            </div>
        </div>
    );
}
 
export default SubDropDown;