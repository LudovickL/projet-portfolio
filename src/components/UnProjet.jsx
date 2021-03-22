import React from 'react'
import './UnProjet.scss'

const UnProjet = ({projets}) => {
    //console.log(projets)
    const {texteCourt, image} = projets.fields;
    return(
        <div className="Projet-conteneur">
            <div className="projet-logo">
                <h1 className="projet-title">{texteCourt}</h1>
                <img src={image.fields.file.url} alt={texteCourt} className="projet-image"/> 
            </div>
        </div>
    )
}

export default UnProjet;