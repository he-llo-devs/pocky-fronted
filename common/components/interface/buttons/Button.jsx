const Button = ({ children, color, type, size, className, onClick, disabled}) => {

    const config = {
        default : 'bg-gray-600 text-white hover:bg-gray-700',
        primary : 'bg-primary-600 text-white hover:bg-primary-700',
        secondary : 'bg-secondary-800 text-white hover:bg-secondary-800',
        tertiary : 'bg-tertiary-500 text-white hover:bg-tertiary-600',
        link: 'bg-transparent text-primary',
        cancel: 'bg-transparent text-danger',
        danger: 'bg-red-500 text-white hover:bg-red-700 border border-red-500 hover:border-red-700',
        transparent: 'hover:bg-primary-50 hover:dark:text-gray-800 transition-all duration-200',
        transparentPrimary: 'text-primary-600 hover:text-primary-700',
        transparentDanger: 'text-red-500 hover:text-red-600',
        
        disabled: 'bg-gray-200 text-gray-400 dark:bg-gray-700',
        outline : 'bg-transparent border border-gray-400 dark:border-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600',
        outlinePrimary : 'bg-transparent border border-primary-600 text-primary-600 dark:text-primary-500 dark:border-primary-500 hover:bg-green-50 hover:dark:bg-primary-900/20',
        dashedPrimary : 'bg-transparent border border-dotted border-primary-600 text-primary-600 dark:text-primary-500 dark:border-primary-500 hover:bg-green-50 hover:dark:bg-primary-900/20',
        outlineDanger : 'bg-transparent border border-red-500 text-red-500 dark:text-red-400 dark:border-red-400 hover:bg-red-50 hover:dark:bg-red-900/20',
    }

    const sizes = {
        xs: 'rounded-lg py-1 px-3 text-sm whitespace-nowrap',
        sm: 'rounded-lg py-1 px-3',
        md: 'rounded-xl py-2 px-6',
        onlyIcon: 'rounded-md py-1 px-3 xl:px-2 xl:py-0'
    }

    return (
        <button 
            type={type || 'button'} 
            className={`transition-all duration-200 ${sizes[size || 'md']} ${config[color || 'default']} ${className || ''} disabled:pointer-events-none disabled:opacity-50 disabled:dark:opacity-40`} 
            onClick={onClick || null} 
            disabled={disabled || false}
        >
            {children}
        </button>
    );
};

export default Button;
