const CardTitle = ({children, className}) => {
    return (  
        <p className={`font-bold px-5 pt-5 select-none ${className || ''}`}>{children}</p>
    );
}
 
export default CardTitle;