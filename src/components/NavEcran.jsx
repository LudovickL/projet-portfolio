import './NavEcran.scss'
import { NavLink } from 'react-router-dom';
import React from 'react';


export default function NavEcran() {
    return(
        <header className="Entete-screen">
            <ul className="nav">
                <li><NavLink to="/" activeClassName="navActive" exact>Accueil</NavLink></li>
                <li><NavLink to="/a-propos" activeClassName="navActive">À propos</NavLink></li>
                <li><NavLink to="/projets" activeClassName="navActive">Projets</NavLink></li>
                <li><NavLink to="/contact" activeClassName="navActive">Contact</NavLink></li>
            </ul>
        </header>
    )
}