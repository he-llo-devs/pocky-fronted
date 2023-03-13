import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faAngleDoubleLeft, 
    faAngleDoubleRight, 
    faAngleLeft, 
    faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const Pagination = ({className, link, current, from, to, total, first, last, query}) => {
    if(!current) current = 1;
    
    const [queryString, setQueryString] = useState('');
    
    useEffect(() => {
        if(query) {
            let queryFlag = '';
            for(const property in query) {
                queryFlag = queryFlag.concat(`&${property}=${query[property]}`);
            }

            setQueryString(queryFlag);
        }
    }, [query]);


    return ( 
        <div className={`flex items-center justify-end p-5 space-x-8 sticky left-0 ${className || ''}`}>
            <p><span>{from || "0"}</span> - <span>{to || "0"}</span> de {total || "0"}</p>
            <div className="flex space-x-4 rounded-lg p-1">
                <Link href={link ? `${link}?page=${first}${queryString}` : '#'} className={first == current ? 'text-gray-400 dark:text-gray-600 pointer-events-none' : ''}>
                    <div className="py-2 px-4 rounded-lg hover:bg-green-100 hover:dark:text-gray-800 transition-all duration-200">
                        <FontAwesomeIcon icon={faAngleDoubleLeft}/>
                    </div>
                </Link>
                <Link href={link ? `${link}?page=${parseInt(current) - 1}${queryString}` : '#'} className={first == current ? 'text-gray-400 dark:text-gray-600 pointer-events-none' : ''}>
                    <div className="py-2 px-4 rounded-lg hover:bg-green-100 hover:dark:text-gray-800 transition-all duration-200">
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </div>
                </Link>
                <Link href={link ? `${link}?page=${parseInt(current) + 1}${queryString}` : '#'} className={current == last ? 'text-gray-400 dark:text-gray-600 pointer-events-none' : ''}>
                    <div className="py-2 px-4 rounded-lg hover:bg-green-100 hover:dark:text-gray-800 transition-all duration-200">
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </div>
                </Link>                
                <Link href={link ? `${link}?page=${last}${queryString}` : '#'} className={current == last ? 'text-gray-400 dark:text-gray-600 pointer-events-none' : ''}>
                    <div className="py-2 px-4 rounded-lg hover:bg-green-100 hover:dark:text-gray-800 transition-all duration-200">
                        <FontAwesomeIcon icon={faAngleDoubleRight}/>
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Pagination;