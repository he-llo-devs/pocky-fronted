const Skeleton = () => {
    return (
        <div className="space-y-2 animate-pulse">
            <div className="w-full h-12 shadow-sm rounded-lg border px-5 border-gray-200 dark:border-gray-700 flex items-center">
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
                <div className=" w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="w-full h-12 shadow-sm rounded-lg border px-5 border-gray-200 dark:border-gray-700 flex items-center">
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
                <div className=" w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="w-full h-12 shadow-sm rounded-lg border px-5 border-gray-200 dark:border-gray-700 flex items-center">
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
                <div className=" w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
        </div>
    );
}
 
export default Skeleton;