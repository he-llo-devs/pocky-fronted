const HeaderButton = ({ children, color, classname, handleClick}) => {

    const config = {
        primary : 'bg-primary-600 text-lightBackground hover:bg-primary-700',
        secondary : 'bg-green-600 text-lightBackground hover:bg-green-700',
        tertiary : 'bg-tertiary text-lightBackground hover:bg-tertiary-600',
        link: 'bg-transparent text-primary',
        cancel: 'bg-transparent text-danger',
        outline : 'bg-transparent border-[1px] border-lightBackground text-lightBackground'
    }
    return (
        <button className={`${classname} button ${config[color || 'primary']}`} onClick={handleClick}>
            {children}
        </button>
    );
};

export default HeaderButton;
