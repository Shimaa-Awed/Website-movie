import React from "react";
import logo from '../../Assets/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGlobe, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Navbar = () =>{
    return(
        <nav expand='lg'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/movie">Movie</Link></li>
                    <li><a href="#">tv show</a></li>
                    <li><a href="#">pricing</a></li>
                    <li><a href="#">contacts</a></li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <FontAwesomeIcon icon={faGlobe} />
                <select>
                    <option value="en">en</option>
                    <option value="ar">ar</option>
                    <option value="fr">Fr</option>
                </select>
                <button>sign in</button>
                <button><FontAwesomeIcon icon={faBars}/></button>
            </div>
        </nav>
    )
    // return (
    //     <Navbar expand="lg">
         
    //         <Navbar.Brand to="/">
    //          <img src={logo} alt='logo'/>
    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Navbar className="ms-auto ">
    //             <Link to="/">Home</Link>
    //             <Link>Movie</Link>
    //             <Link >tv show</Link>
    //             <Link >pricing</Link>
    //             <Link >blog</Link>
    //             <Link to='/contact'>contact</Link>
                
    //           </Navbar>
    //           <div className='nav-right'>
    //            <div className='search'>
    //             Search
    //            </div>
    //             <select>
    //              <option>en</option>
    //              <option>ar</option>
    //              <option>fr</option>
    //             </select>
    //             <button>sign in</button>
    //           </div>
    //         </Navbar.Collapse>
        
    //     </Navbar>
    //   );
}

export default Navbar;