import React from 'react'
import './Modal.scss'

export default class Modal extends React.Component {
    render() {
        if(!this.props.show){
            return null;
        }

        return(
            <div className="Modal">
                <h1>Text_projet</h1>
                <p>Description_projet</p>
                {/* <img src="../public/" alt="text d'image" className="dynamic-image"/> */}
                <p className="projet-url">Lien_projet</p>
                <a href="#" className="close" onClick={this.props.onClose}></a>
            </div>
            
        )
    }   
}
