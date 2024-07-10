import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';
import Membership from '../Membership/Membership';






const Layout = ()=>{
    return(
        <Fragment>
           
            <Outlet />
            <Membership />
            <Footer />
        </Fragment>
    )
}


export default Layout;