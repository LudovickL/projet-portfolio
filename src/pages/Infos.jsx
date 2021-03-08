import './Pages.scss';

export default function Projets() {
    return(
        <div className="Infos">
            <h1 className="Titre">À propos</h1> 
            <div className="container-img">
                <img src="./photo_1.png" className="img" alt="Ludovick Lubérisse" />
                <img src="./photo_2.png" className="img" alt="Ludovick Lubérisse" />
                <img src="./photo_3.png" className="img" alt="Ludovick Lubérisse" />
            </div>
            <p className="texte">
                Mon nom est Ludovick Lubérisse et je suis autant un game designer qu'un compositeur sonore. 
                J'ai toujours été passioné par le domaine du jeu vidéo et j'ai une approche très expérimentale dans l'industrie. 
                Je suis prêt à créer des expériences dynamiques qui vont enrichir la pensée et faire réfléchir à un message ou 
                une idée dans les jeux vidéos.
            </p>
            <p className="texte">
                Je m'expertise dans le domaine de la musique et j'ai composé des chansons pours divers projets depuis déja cinq ans, 
                autant pour mon groupe de musique Distorted Majesty que pour des jeux comme Mahjong Trails. J'ai apprie à utiliser 
                Unity et à comprendre le language de code C# à la Techniques d'Intégration Multimédia, au Collège de Maisonneuve. 
                J'ai de l'expérience avec la suite Adobe, plus particulièrement Photoshop, Premier Pro et After Effects.
            </p>
        </div>
    )
}