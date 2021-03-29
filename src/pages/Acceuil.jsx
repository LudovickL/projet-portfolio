import './Acceuil.scss'
import { motion } from "framer-motion"

export default function LogoCentre() {

    const opacity= { hidden: { opacity: 0 } }

    return(
        <div className="Logo-conteneur">
            <motion.div animate="hidden" variamnts={opacity} transition={{duration:2}}>
                <img src="./Logo_portfolio.png" className="App-logo" alt="logo" />
            </motion.div>
            <h1 className="App-title">Ludovick lubérisse</h1> 
        </div>
    )
}