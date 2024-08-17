import React, {useState, useMemo} from "react";
import{ Link } from 'react-router-dom';
import './header.css';

function MyHeader() {
    return(
        <nav className="menu-opc">
            <ul>
                <li>
                    <Link to={"/Home"}>Home</Link>
                </li>
                <li>
                    <a href='./pages/App.js'>Login</a>
                </li>
            </ul>
        </nav>
    )
};

export default MyHeader;