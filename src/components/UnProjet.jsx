import './UnProjet.scss'

export default function UnProjet(props) {
    return(
        <div className="Projet-conteneur">
            <div className="projet-logo">
                <h1 className="projet-title">Projet</h1>
                <img src="./Logo_portfolio.png" className="projet-image" alt="logo" /> 
            </div>
            <div className="projet-text">
                <p className="projet-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sem diam, vel convallis velit gravida quis. In ultrices tristique lectus, ac semper nibh placerat eget. Ut pharetra egestas tincidunt. Curabitur pulvinar, neque id luctus tincidunt, mauris arcu pellentesque dui, ac dictum enim leo vulputate neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc fringilla efficitur ex quis maximus. Suspendisse malesuada turpis augue, quis blandit ante pulvinar vitae. Nulla sed ornare turpis, eu bibendum dolor. Maecenas a vehicula risus.
                </p>
                <a href="https://www.artstation.com/oritaggart" className="projet-link">Lien vers projet</a>
            </div>
        </div>

        
    )
}