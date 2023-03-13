const Tcaption = ({children, className}) => {
    return (  
        <caption className={`text-lg font-bold mx-5 my-5 text-left ${className}`}>{children}</caption>
    );
}
 
export default Tcaption;