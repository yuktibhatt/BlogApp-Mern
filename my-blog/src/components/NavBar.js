import React from 'react';
import { Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className = "border-b-4 border-indigo-500 text-center top-0 w-full bg-indigo-400 font-bold text-lg text-white">
        <ul>
            <li className="inline-block pt-4 pb-4">
                <Link to="/" className="pl-6 pr-8">Home</Link>
            </li>
            <li className="inline-block pt-4 pb-4">
                <Link to="/about" className="pl-6 pr-8">About</Link>
            </li>
            <li className="inline-block pt-4 pb-4">
                <Link to="/article-list" className="pl-6 pr-8">Articles</Link>
            </li>
            
        </ul>
        
        </nav>


    )
}


export default NavBar;

