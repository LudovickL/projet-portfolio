import './Pages.scss';
import './plusieursProjets.scss';
import UnProjet from '../components/UnProjet';

export default function Projets() {
    return(
        <div className="Page">
            <h1 className="Titre">Projets - Page en construction</h1>
            <div className="projets">
                <UnProjet />
                <UnProjet />
            </div> 
            
        </div>
    )
}