import './NavEcran.scss'
import { NavLink } from 'react-router-dom';
import React from 'react';
import {motion} from 'framer-motion';

const expand = {visible: {scale: 1.2, transition: { duration: 0.5 }}}


export default function NavEcran() {
    return(
        <header className="Entete-screen">
            <ul className="nav">
                <motion.div whileHover="visible" variants={expand}>
                    <li><NavLink to="/" activeClassName="navActive" exact>Accueil</NavLink></li>
                </motion.div>
                <motion.div whileHover="visible" variants={expand}>
                    <li><NavLink to="/a-propos" activeClassName="navActive">À propos</NavLink></li>
                </motion.div>
                <motion.div whileHover="visible" variants={expand}>
                    <li><NavLink to="/projets" activeClassName="navActive">Projets</NavLink></li>
                </motion.div>
                <motion.div whileHover="visible" variants={expand}>
                    <li><NavLink to="/contact" activeClassName="navActive">Contact</NavLink></li>
                </motion.div>
            </ul>
        </header>
    )
}