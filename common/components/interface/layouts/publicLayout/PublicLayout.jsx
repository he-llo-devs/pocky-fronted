import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const PublicLayout = ({children, auth}) => {
    return ( 
        <React.Fragment>
            <Header auth={auth} />
            {children}
            <Footer />
        </React.Fragment>
    );
}
 
export default PublicLayout;