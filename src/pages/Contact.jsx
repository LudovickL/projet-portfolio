import Formulaire from '../components/Formulaire';
import './Pages.scss';

export default function Contact() {
    return(
        <div className="Page">
            <h1 className="Titre">Contact - Page en construction</h1> 
            <p className="texte-contact">Pour toute question ou idées que vous voulez réaliser avec moi, envoyer un message ici!</p>
            <div className="Formulaire">
                <Formulaire></Formulaire>
            </div>
        </div>
    )
}