import './NavEcran.scss'
import { NavLink } from 'react-router-dom';
import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


export default function NavEcran() {
    return(
        <header className="Entete-screen">
            <div className="Nom">
                <NavLink to="/" activeClassName="navActive" exact>
                    Ludovick Lubérisse
                </NavLink>
            </div>
            <ul className="nav">
                <li><NavLink to="/a-propos" activeClassName="navActive">À propos</NavLink></li>
                <li><NavLink to="/projets" activeClassName="navActive">Projets</NavLink></li>
                <li><NavLink to="/contact" activeClassName="navActive">Contact</NavLink></li>
            </ul>
        </header>
    )
}