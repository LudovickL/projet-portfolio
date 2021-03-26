import React, {useState} from 'react'
import './UnProjet.scss'
import Modal from './Modal'


const UnProjet = ({projets}) => {
    const {texteCourt, image, lienDuProjet, descriptionDuProjet} = projets.fields; 
    // Use useState to manage show value. The value is false by default.
    const [show, setShow] = useState(false);



    return(
        <div className="Projet-conteneur">
            <div className="projet-logo" >
                <h1 className="projet-title">{texteCourt}</h1>
                <img src={image.fields.file.url} alt={texteCourt} className="projet-image" onClick={() => setShow(true)}/>
            </div>
            <div className="projet-modal">
                <Modal 
                    title={texteCourt} 
                    desc={descriptionDuProjet}
                    img={image.fields.file.url}
                    alt={texteCourt}
                    url={lienDuProjet}
                    show={show} 
                    onClose={() => setShow(false)}
                    />
            </div>
            
        </div>
    )
}

export default UnProjet;