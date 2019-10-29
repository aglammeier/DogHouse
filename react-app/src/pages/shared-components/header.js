import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div id="linkHeader">
                <Link to="/" className="Link">Home</Link>
                <Link to="/hell" className="Link">Hell</Link>
                <Link to="/about" className="Link">About</Link>
            </div>
        )
    }
}

export default Header;