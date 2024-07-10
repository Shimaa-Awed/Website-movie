import React, { Fragment } from "react";
import Header from "../../Components/Header/Header";
import Upcoming from "../../Components/Upcoming/Upcoming";
import Streaming from "../../Components/Streaming/Streaming";
import BestFilms from "../../Components/BestFilms/BestFilms";

import Download from "../../Components/Download/Download";

const Home = (props)=>{
    return(
        <Fragment>
            <Header />
            <Upcoming mylistfilms={props.listfilms}/>
            <Download />
            <Streaming />
            <BestFilms mylistfilms={props.listfilms}/>
            
        </Fragment>
    )
}


export default Home;