import Formulaire from '../components/Formulaire';
import './Pages.scss';
import { motion } from "framer-motion"

export default function Contact() {

    const opacity= { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    return(
        <div className="Page">
            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={opacity} 
                transition={{duration:1}}
                >
                <h1 className="Titre">Contact</h1> 
                <p className="texte-contact">Pour toute question ou idées que vous voulez réaliser avec moi, envoyer un message ici!</p>
                <div className="Formulaire">
                    <Formulaire></Formulaire>
                </div>
            </motion.div>
        </div>
    )
}