import React from 'react';
import UnProjet from './UnProjet';
import {useState} from 'react';


const DesProjets = ({ posts }) => {
    return(
        <div className="listeProjets">
            {posts.map((projets, index) => <UnProjet  projets={projets} key={index} ></UnProjet>)}
        </div>
    )
}

export default DesProjets;