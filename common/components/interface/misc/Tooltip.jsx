import { useRef } from "react";

const Tooltip = ({children, text}) => {
    const tooltipRef = useRef(null);

    const handleMouseEnter = () => {
        tooltipRef.current.style.opacity = 1;
        tooltipRef.current.style.marginLeft = "20px";
    }

    const handleMouseLeave = () => {
        tooltipRef.current.style.opacity = 0;
        tooltipRef.current.style.marginLeft = "10px";
    }

    return ( 
        <div className="relative">
            <div className="absolute whitespace-no-wrap bg-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150" style={{ left: "100%", opacity: 0 }} ref={tooltipRef}>
                <div className="bg-gray-700 h-3 w-3 absolute" style={{ left: "-6px", transform: "rotate(45deg)" }}/>
                {text}
            </div>
            <div onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {children}
            </div>
        </div>
    );
}
 
export default Tooltip;