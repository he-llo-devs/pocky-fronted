import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

const BreadcrumbStatic = ({title, items}) => {
    return (  
        <div className="px-5 md:px-10 my-2 flex items-center">
            <div className="mr-4">
                <p className="text-xl font-extrabold">{title}</p>
            </div>
            <div className="hidden border-l pl-4 lg:flex items-center space-x-2">
                <p className="text-primary-500">Home</p>
                { items ? items.map((e, index) => (
                    <Fragment key={index}>
                        <FontAwesomeIcon icon={faChevronRight} size="xs"/>
                        <p>{e}</p>
                    </Fragment>
                )) : null}
            </div>
        </div>
    );
}
 
export default BreadcrumbStatic;