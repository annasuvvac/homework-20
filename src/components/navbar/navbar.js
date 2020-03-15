import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const mainPage = () => {
    return (
        <div className="navApp">
            <nav className="navbar">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <span id="name" className="navbar-brand mb-0 h1">ANA SUVAC</span>
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-1">
                    <Link to="/About">About Me</Link>
                </div>
                <div className="col-md-1">
                <Link to="/Portfolio">Portfolio</Link>
                </div>
                <div className="col-md-1">
                <Link to="/Contact">Contact</Link>
                </div>
                <div className="col-md-1"></div>
            </nav>

        </div>
    )
}
export default mainPage