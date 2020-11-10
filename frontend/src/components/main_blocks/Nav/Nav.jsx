import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFile, faInfoCircle, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <nav className="nav-main">
            <div className="nav-link-main">
                <Link to="/" className={`nav-link${useLocation().pathname === "/" ? " is-current" : ""}`}><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/reservation" className={`nav-link${useLocation().pathname === "/reservation" ? " is-current" : ""}`}><FontAwesomeIcon icon={faShoppingBasket} /></Link>
                <Link to="/files" className={`nav-link${useLocation().pathname === "/files" ? " is-current" : ""}`}><FontAwesomeIcon icon={faFile} /></Link>
                <Link to="/events" className={`nav-link${useLocation().pathname === "/events" ? " is-current" : ""}`}><FontAwesomeIcon icon={faInfoCircle} /></Link>
            </div>
        </nav>
    )
}

export {
    Nav
};