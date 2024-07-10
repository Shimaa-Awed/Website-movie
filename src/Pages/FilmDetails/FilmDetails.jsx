import React from "react";
import { useParams } from "react-router-dom";

const FilmDetails = (props)=>{

    const params = useParams();
    const filmdata = props.listfilms.find((fitem)=>{
        return (
            fitem.id === params.filmid
        )
    })

    const { title , year , type , poster} = {filmdata}

    return(
        <section className="filmdetails">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={poster} alt={title}/>
                    </div>
                    <div className="col-lg-6">
                        <h3>{title}</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quas magnam facere
                        assumenda enim, ab libero placeat commodi eveniet esse!</p>
                        <span>{year}</span>
                        <span>{type}</span>
                        <button>watch film</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default FilmDetails;