import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart} from '@fortawesome/free-solid-svg-icons';
import './MovieItem.css';
import { Link } from "react-router-dom";


const MovieItem = (props)=>{
    return(
        <div className="col-lg-3 col-md-6">
            <div className="box">
                <div className="img-box">
                    <img src={props.poster} alt="poster"/>
                </div>
                <div className="text">
                    <div className="text-header">
                        <Link to={`/films/${props.filmid}`}>{props.title}</Link>
                        <span>{props.year}</span>
                    </div>
                    <div className="text-footer">
                        <span className="first">{props.type}</span>
                        <li>
                            <span><FontAwesomeIcon icon={faHeart} /> 3.5</span>
                            <span><FontAwesomeIcon icon={faClock} /> 128 min </span>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MovieItem;