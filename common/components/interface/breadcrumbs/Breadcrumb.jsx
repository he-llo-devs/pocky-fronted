import MenuItems from "@/common/utils/MenuItems";
import useInterface from "@/hooks/useInterface";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Breadcrumb = () => {
    const router = useRouter();
    let text = '';
    
    const { businessTexts } = useInterface();
    const menu = MenuItems(businessTexts);

    menu.map((e) => {
        if(e.items) {
            e.items.map((i) => {
                if(i.path === router.pathname) {
                    text = i.name;
                    return
                }

                if(i.items) {
                    i.items.map((j) => {
                        if(j.path == router.pathname) {
                            text = i.name;
                        }
                    })
                }
            })
        } else if(e.path) {
            if(e.path === router.pathname) {
                text = e.name;
                return;
            }
        }
    })

    return (  
        <div className="px-5 md:px-10 my-2 flex items-center">
            <div className="mr-4">
                <p className="text-xl font-extrabold">{text}</p>
            </div>
            <div className="hidden border-l pl-4 lg:flex items-center space-x-2">
                <p className="text-primary">Home</p>
                <FontAwesomeIcon icon={faChevronRight} size="xs"/>
                { menu.map((e, index) => {
                    if(e.items) {
                        return (
                            <Fragment key={index}> 
                                { e.items.map((i, index) => {
                                    if(i.path === router.pathname) {
                                        return (
                                            <Fragment key={index}>
                                                <p>{e.name}</p>
                                                <FontAwesomeIcon icon={faChevronRight} size="xs"/>
                                                <p>{i.name}</p>
                                            </Fragment>
                                        )
                                    }

                                    if(i.items) {
                                        return(
                                            <Fragment key={index}>
                                                { i.items.map((j, index) => {
                                                    if(j.path === router.pathname) {
                                                        return(
                                                            <Fragment key={index}>
                                                                <p>{e.name}</p>
                                                                <FontAwesomeIcon icon={faChevronRight} size="xs"/>
                                                                <p>{j.name}</p>
                                                            </Fragment>

                                                        )
                                                    }
                                                })}
                                            </Fragment>
                                        )
                                    }
                                })}
                            </Fragment>
                        )
                    } else if(e.path) {
                        if(e.path === router.pathname) {
                            return (
                                <Fragment key={index}>
                                    <p>{e.name}</p> 
                                </Fragment>
                            )
                        }
                    } 
                    return null;
                })}
            </div>
        </div>
    );
}
 
export default Breadcrumb;