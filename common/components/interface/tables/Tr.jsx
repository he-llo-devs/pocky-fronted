const Tr = ({children, className}) => {
    return ( 
        <tr className={`border-t border-gray-100 dark:border-gray-700 text-left ${className}`}>
            {children}
        </tr>
    );
}
 
export default Tr;