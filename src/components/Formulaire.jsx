import emailjs from 'emailjs-com';
import React from 'react';
import './Formulaire.scss';

function Formulaire() {

  let msgBouton = "Envoyer";

  function sendMail(e) {
    e.preventDefault();
    emailjs.sendForm('service_slsnfcn', 'template_ipesxvr', e.target, 'user_TpRk119LuedlrSVLQDsdx')
      .then((result) => {
          //console.log(result.text);
          alert("Le message à été envoyé!");
          document.getElementsByClassName("button").innerHTML = "message envoyé"
      }, (error) => {
          //console.log(error.text);
          alert("Il y a malheureusement un problème. Veuillez réasseyer plus tard");
      });
      e.target.reset();
  }
  return(
    <div className="Formulaire">
      <form id="contact-form" onSubmit={sendMail}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" className="form-control" name="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Adresse courriel</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" name="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" name="message"/>
        </div>
        <div className="form-group">
            <input type="submit" className="button" value={msgBouton}></input>
        </div>
      </form>
    </div>
  );
}
export default Formulaire;