const Table = ({ children, className }) => {
    return (
            <table className={`w-full border-collapse ${className || ''}`}>
                {children}
            </table>
    );
}
 
export default Table;