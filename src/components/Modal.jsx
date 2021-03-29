import React from 'react'
import './Modal.scss'
import UnProjet from './UnProjet'
import { Route } from 'react-router-dom'
import { motion } from "framer-motion"

export default class Modal extends React.Component {
    render() {
        if(!this.props.show){
            return null;
        }
        const opacity= { 
            hidden: { opacity: 0 }, visible: { opacity: 1 } 
        };

        return(
            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={opacity} 
                transition={{duration:1}}
                >
            <div className="Modal">
                
                <div className="modal-flex">
                    <div className="modal-img">
                        <img src={this.props.img} alt={this.props.alt} className="dynamic-image"/>
                    </div>
                    <div className="modal-text">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.desc}</p>
                        <p className="projet-url" >Lien vers projet: 
                            <a target="_blank"
                                className="projet-link"
                                href={this.props.url}
                            >{this.props.url}</a>
                        </p>
                        <a href="#" className="close" onClick={this.props.onClose}></a>
                    </div>
                </div>
            </div>
            </motion.div>
        )
    }   
}
