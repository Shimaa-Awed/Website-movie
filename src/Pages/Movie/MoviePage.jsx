import React, { Fragment } from "react";
import BestFilms from '../../Components/BestFilms/BestFilms'

const MoviePage = (props)=>{
    return(
        <Fragment>
            <BestFilms mylistfilms={props.listfilms}/>
        </Fragment>
    )
}

export default MoviePage ;