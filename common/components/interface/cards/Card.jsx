const Card = ({children, className}) => {
    return ( 
        <div className={`rounded-lg bg-white dark:bg-gray-800 shadow-sm shadow-transparent/5 w-full ${className}`}>
            {children}
        </div>
    );
}
 
export default Card;