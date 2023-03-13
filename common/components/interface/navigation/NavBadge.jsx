const NavBadge = ({navbar, text}) => {
    return ( 
        <div className={`${navbar.full ? '': 'hidden'} bg-green-400 py-1 px-2 rounded-lg h-5`}>
            <p className="text-green-900 font-bold text-xs text-center leading-3">{text}</p>
        </div>
    );
}
 
export default smallBadge;