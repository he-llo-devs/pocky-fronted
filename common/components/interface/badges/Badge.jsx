const Badge = ({children, className, type, size}) => {

    const config = {
        success: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
        error:'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
        warning: 'bg-orange-200/70 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
        info: 'bg-sky-200/50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400',
        default: 'bg-gray-100 dark:bg-gray-600/40',
        primary: 'bg-primary-50/70 dark:bg-primary-700/50 text-primary-700 dark:text-primary-300',
        secondary: 'bg-secondary-400 dark:bg-secondary-800/20 shadow-sm backdrop-blur-md text-secondary-900 dark:text-secondary-600',
    }

    const sizes = {
        default: 'px-3 text-sm',
        xs: 'py-0.5 px-2 text-xs',
        sm: 'py-1 px-4 text-sm',
        md: 'py-2 px-5 text-md',
        lg: 'py-3 px-6 text-md',
    }

    return ( 
        <div className={`text-center inline-block font-semibold rounded-full ${config[type || 'default']} ${sizes[size || 'default']}   ${className || ''}`}>
            {children}
        </div>
    );
}
 
export default Badge;