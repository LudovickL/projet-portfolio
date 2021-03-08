import React from 'react';
import UnProjet from './UnProjet';


const DesProjets = ({ posts }) => {

    return(
        <div className="listeProjets">
            {posts.map((projets, index) => <UnProjet  projets={projets} key={index} />)}
        </div>
    )
}

export default DesProjets;