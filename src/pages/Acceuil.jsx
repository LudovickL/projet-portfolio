import './Acceuil.scss'
import { motion } from "framer-motion"

export default function LogoCentre() {

    const opacity= { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    const title = { hidden: { opacity: 0, scale:0 }, visible: { opacity: 1, scale:1 } };

    return(
        <div className="Logo-conteneur">
            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={opacity} 
                transition={{duration:1}}
                whileHover={{scale: 1.2, transition: { duration: 0.5 },}}
                >
                <img src="./Logo_portfolio.png" className="App-logo" alt="logo" />
            </motion.div>
            <motion.h1 
                className="App-title"
                initial="hidden" 
                animate="visible" 
                variants={title}
                transition={{duration:1}}
                >Ludovick lubérisse</motion.h1> 
        </div>
    )
}