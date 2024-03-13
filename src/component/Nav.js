import React from "react";
import { NavLink , NavNavLink } from "react-router-dom";
function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}}to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}}to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/course">Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/quiz">Quiz</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/key">Key</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/api">Api</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/picture">Picture Api</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/fapi1">FPAII</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e)=>{return e.isActive? "red" : "nav-link"}} to="/fapi2">FPAI2</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav;