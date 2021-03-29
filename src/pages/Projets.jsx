import React from 'react';
import './Pages.scss';
import DesProjets from '../components/DesProjets';
import { client } from '../client';
import { motion } from "framer-motion"

class Projets extends React.Component{
    
    state = {
        projets: []
    }

    componentDidMount() {
        client.getEntries()
        .then((response) => {
            console.log(response)
            this.setState({
                projets: response.items
            })
        })
        .catch(console.error)
    }

    render() {
        const opacity= { hidden: { opacity: 0 }, visible: { opacity: 1 } };
        return(
            <div className="Page">
                <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={opacity} 
                transition={{duration:1}}
                >
                    <h1 className="Titre">Projets</h1>
                    <div className="listeProjets">
                        <DesProjets posts={this.state.projets}/>
                    </div> 
                </motion.div>
            </div>
        )
    }  
}

export default Projets;