import React from 'react';
import './Pages.scss';
import DesProjets from '../components/DesProjets';
import { client } from '../client';

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
        return(
            <div className="Page">
                <h1 className="Titre">Projets</h1>
                <div className="listeProjets">
                    <DesProjets posts={this.state.projets}/>
                </div> 
                
            </div>
        )
    }  
}

export default Projets;