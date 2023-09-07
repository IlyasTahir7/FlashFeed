import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-warning bg-warning shadow-lg rounded-3" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand text-white" style={{ fontFamily: "lobster", fontSize: "35px" }} to="/">FlashFeed</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 text-white" style={{ fontFamily: "Russo One", fontSize: "19px" }}>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item text-white"><Link className="nav-link text-white" to="/business">Business</Link></li>
                            <li className="nav-item text-white"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item text-white"><Link className="nav-link text-white" to="/general">General</Link></li>
                            <li className="nav-item text-white"><Link className="nav-link text-white" to="/health">Health</Link></li>
                            <li className="nav-item text-white"><Link className="nav-link text-white" to="/science">Science</Link></li>
                            <li className="nav-item text-white"><Link className="nav-link text-white" to="/sports">Sports</Link></li>
                            <li className="nav-item text-white"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
