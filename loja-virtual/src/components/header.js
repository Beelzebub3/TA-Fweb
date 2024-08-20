import React, {useState, useMemo} from "react";
import{ Link } from 'react-router-dom';
import './header.css';

function MyHeader() {
    return(
        <nav className="menu-opc">
            <ul>
                <li>
                    <Link to='/principal'>Home</Link>
                </li>
                <li>
                    <Link to={"/"}>Login</Link>
                </li>
            </ul>
        </nav>
    )
};

export default MyHeader;