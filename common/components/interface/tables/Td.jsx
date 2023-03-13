const Td = ({children, colSpan, className}) => {
    return (
        <td colSpan={colSpan || 1} className={` first:pl-10 last:pr-10 px-3 font-light py-3 ${className || ''}`}>{children}</td>
    );
}
 
export default Td;