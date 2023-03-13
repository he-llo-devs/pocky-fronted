const LabeledData = ({ label, content, NoContentText, className }) => {
    return ( 
        <div className={`w-full ${className || ''}`}>
            <p className="text-sm font-light">{label}</p>
            <div className="w-full mt-1 py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                <p className={`truncate ${!content ? 'text-gray-400 dark:text-gray-500' : ''}`}>{content || NoContentText || ''}</p>
            </div>
        </div>
    );
}
 
export default LabeledData;