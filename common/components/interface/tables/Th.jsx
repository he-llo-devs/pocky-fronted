const Th = ({children, scope, className}) => {
    return (
        <th scope={scope || 'col'} className={`first:pl-10 last:pr-10 px-3 py-2 font-medium ${className}`}>{children}</th>
    );
}
 
export default Th;