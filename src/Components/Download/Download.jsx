import React from "react";
import downimg from '../../Assets/services_img.jpg';
import './Download.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTelevision, faVideo } from '@fortawesome/free-solid-svg-icons';

const Download = ()=>{
    return(
        <section className="Download">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="services-box">
                            <img src={downimg} alt="services" />
                            <a href="#"> Download <FontAwesomeIcon icon={faDownload} /> </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <span>OUR SERVICES</span>
                        <h2>Download Your Shows <br></br>Watch Offline.</h2>
                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have 
                        suffered alteration in some injected humour.</p>
                        <div className="serv-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faTelevision}/>
                            </div>
                            <div className="text">
                                <h4>Enjoy on Your TV.</h4>
                                <p>Lorem ipsum dolor sit amet, consecetur 
                                adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="serv-item">
                            <div className="icon">
                                <FontAwesomeIcon icon={faVideo}/>
                            </div>
                            <div className="text">
                                <h4>Watch Everywhere.</h4>
                                <p>Lorem ipsum dolor sit amet, consecetur 
                                adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Download ;