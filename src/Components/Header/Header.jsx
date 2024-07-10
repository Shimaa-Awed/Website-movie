import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faPlay } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Navbar from "../Navbar/Navbar";




const Header = ()=>{
    return(
        <header>
         <Navbar />
            <div className="wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="wrap-text">
                                <h4>Movflx</h4>
                                <h2>Unlimited <span>Movie</span>, TVs Shows, & More.</h2>
                                <div className="details">
                                    <ul>
                                        <li>
                                            <span>pg 18</span>
                                            <span>hd</span>
                                        </li>
                                        <li>
                                            <span>romance,</span>
                                            <span>drama</span>
                                        </li>
                                        <li>
                                            <span><FontAwesomeIcon icon={faCalendar} /> 2022 </span>
                                            <span><FontAwesomeIcon icon={faClock} /> 128 min </span>
                                        </li>
                                    </ul>
                                </div>
                                <button><FontAwesomeIcon icon={faPlay} />watch now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;