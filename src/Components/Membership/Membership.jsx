import React from "react";
import './Membership.css';


const Membership = ()=>{
    return(
        <section className="membership">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>TRIAL START FIRST 30 DAYS.</h2>
                        <p>Enter your email to create or restart your membership.</p>
                    </div>
                    <div className="col-lg-6">
                        <form>
                            <input type="email" placeholder="Enter Your Email" />
                            <button>Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Membership ;