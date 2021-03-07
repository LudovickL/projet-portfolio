import React from 'react';
import axios from 'axios';
import './Formulaire.scss';

//Le code pour cette classe fut trouvé sur le blog mailtrap dans un article créer par Aleksandr Varnin:
// https://blog.mailtrap.io/react-contact-form/#How_do_you_create_a_contact_form_with_React

// Il y a aussi l'article de Victoria Lo sur le sujet:
// https://medium.com/verclaire-nine/how-to-build-a-contact-form-with-react-and-nodemailer-3ca105eff797
class Formulaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div className="App">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <div className="form-group">
                <input type="submit" className="button" value="Envoyer"></input>
            </div>
          </form>
        </div>
      );
    }
    // Le nom de la personne qui envoie le message va être enregistrer
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    // L'adresse courriel de la personne qui envoie le message va être enregistrer
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    // Le nessage de la personne va être enregistrer
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    // Le message sera soumit et envoyer à l'adresse email voulu
      handleSubmit(event) {
        event.preventDefault();
        
        axios({
          method:"POST",
          url:"/send",
          data: this.state
        }).then((response)=>{
          if(response.data.status === 'success') {
            alert("votre message a été envoyé!");
            this.resetForm()
          } else if(response.data.status === 'fail') {
            alert("Il y a eu une erreur avec votre message. Veuillez réessayer.")
          }
        })
      }
    }
    
    export default Formulaire;