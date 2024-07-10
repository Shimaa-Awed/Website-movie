import React from "react";
import './BestFilms.css';
import MovieItem from "../MovieItem/MovieItem";




const BestFilms = (props)=>{
    const Moviedetails = props.mylistfilms.slice(0, 4).map((film)=>{
        return(
            <MovieItem key={film.id} title={film.title}
            year={film.year} poster={film.poster} type={film.type}/>
        )
    })
    return(
        <section className="bestfilms">
        
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <span>BEST TV SERIES</span>
                        <h2>World Best TV Series</h2>
                    </div>
                </div>
                <div className="row">
                    {Moviedetails}
                </div>
            </div>
        </section>
    )
}

export default BestFilms;