import React from "react";
import banner from '../../Assets/movie_details_img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faPlay, faShare } from '@fortawesome/free-solid-svg-icons';
// import { useParams } from "react-router-dom";
import './MovieDetails.css';
import Navbar from '../../Components/Navbar/Navbar';


const MovieDetails = ()=>{
    // const {productid} = useParams();
    // const product = props.listfilms.find((product)=>product.id === productid)
    return(
        <section className="movie-details">
            <Navbar />
            <div className="wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={banner} alt="banner" />
                        </div>
                        <div className="col-lg-6">
                            <h4>New Episodes</h4>
                            <h2>The Easy<span>Reach</span></h2>
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
                            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.<br></br>
                            There are many variations of passages of lorem Ipsum available, but the majority<br></br>
                            have suffered alteration in some injected humour.</p>
                            <div className="share">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <FontAwesomeIcon icon={faShare} />
                                        <h5>share</h5>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="text">
                                            <h3>Prime Video</h3>
                                            <span>Streaming Channels</span>
                                        </div>
                                        <button><FontAwesomeIcon icon={faPlay} />watch now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default MovieDetails;