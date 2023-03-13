const LabeledDivider = ({children, className}) => {
    return ( 
        <div className={`border-b border-gray-200 dark:border-gray-700 ${className}`}>
            <p className="text-lg font-light text-gray-400 dark:text-gray-500 select-none">{children}</p>
        </div>
    );
}
 
export default LabeledDivider;