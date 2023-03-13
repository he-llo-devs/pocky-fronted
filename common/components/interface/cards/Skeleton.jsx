const Skeleton = () => {
    return ( 
        <div className="w-full px-5 py-8 grid gap-6 grid-cols-3">
            <div className="col-span-1">
                <div className="skeleton"/>
            </div>
            <div className="row-start-2 col-span-1">
                <div className="skeleton"/>
            </div>
            <div className="row-start-2 col-span-2">
                <div className="skeleton"/>
            </div>
            <div className="row-start-3 col-span-2">
                <div className="skeleton"/>
            </div>
            <div className="row-start-3">
                <div className="skeleton"/>
            </div>
            <div className="row-start-4">
                <div className="skeleton"/>
            </div>
            <div className="row-start-4">
                <div className="skeleton"/>
            </div>
            <div className="row-start-4">
                <div className="skeleton"/>
            </div>
        </div>
    );
}
 
export default Skeleton;