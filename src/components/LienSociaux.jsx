import './LienSociaux.scss'
import {Icon} from '@chakra-ui/icons';
import {ReactComponent as Linkedin} from '../img-importants/linkedin.svg';
import {ReactComponent as Artstation} from '../img-importants/artstation.svg';

export default function LienSociaux() {
    return(
        <footer className="BasDePage">
            <div className="liens">
                <a className="liens-txt" href="https://www.linkedin.com/in/ludovick-lub%C3%A9risse-56312717a/">LinkedIn<Icon className="liens-icon" as={Linkedin} /></a>
                <a className="liens-txt" href="https://www.artstation.com/oritaggart">Artstation<Icon className="liens-icon" as={Artstation} /></a>
            </div>
        </footer>
    )
}