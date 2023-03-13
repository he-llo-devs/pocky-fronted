const Thead = ({children, className}) => {
    return (  
        <thead className={`text-left border-b-2 dark:border-gray-700 ${className}`}>
            {children}
        </thead>
    );
}
 
export default Thead;