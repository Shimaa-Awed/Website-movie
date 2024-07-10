import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import './Upcoming.css';



const Upcoming = (props)=>{

    const Moviedetails = props.mylistfilms.map((film)=>{
        return(
            <MovieItem key={film.id} title={film.title}
            year={film.year} poster={film.poster} type={film.type}/>
        )
    })

    return(
        <section className="upcoming">
           <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span>ONLINE STREAMING</span>
                            <h2>Upcoming Movies</h2>
                        </div>
                    </div>
                    <div className="row">
                        {Moviedetails}
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Upcoming;