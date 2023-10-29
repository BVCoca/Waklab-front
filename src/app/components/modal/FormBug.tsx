"use client"

import "./modal.css"
import { useState } from 'react';
import { useOutsideClick } from "../hooks/useOutsideClick"
import Logo from "../header/logo/logo";
import emailjs from 'emailjs-com';

interface Props {
  setOpenModalReport: any,
}

export default function FormBug({setOpenModalReport} : Props) {
  const current_url = window.location.href

  const [formData, setFormData] = useState({
    categorie: '',
    type: '',
    navigateur: '',
    url: current_url,
    remarques: '',
  });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const ref = useOutsideClick(() => {
    setOpenModalReport(false)
  });

  const sendEmail = (e: any) => {
    e.preventDefault();
    setOpenModalReport(false)
  
    const serviceID = 'service_13ynpfc';
    const templateID = 'template_u2xbtei';
    const userID = 'LwpYVeP2vtOjlsCrm';
  
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log('E-mail envoyé avec succès !', result.text);
      }, (error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error.text);
      });
  };

  return (
    <div id="modalFormContainer">
      <div id="modalFormBug" ref={ref}>
        <Logo width={120} height={40}/>
        <h2>Report un bug !</h2>
        <form id="formBug" onSubmit={sendEmail}>
          <div className="formDiv">
            <label htmlFor="categorie">Catégorie</label><br/>
            <select
              id="categorie"
              name="categorie"
              value={formData.categorie}
              onChange={handleChange}
              required
            >
              <option disabled value="">Sélectionnez une option</option>
              <option value="Anomalie">Anomalie</option>
              <option value="Proposition d'évolution">Proposition d&apos;évolution</option>
            </select><br/><br/>
          </div>
          <div className="formDiv">
            <label htmlFor="type">Type</label><br/>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option disabled value="">Sélectionnez une option</option>
              <option value="Style">Style</option>
              <option value="Informations affichées">Informations affichées</option>
              <option value="Fonctionnalité">Fonctionnalité</option>
            </select>
          </div>
          <div className="formDiv">
            <label hidden htmlFor="url">URL</label><br/>
            <input hidden type="text" value={formData.url}  id="url" name="url"/>
          </div>
          <div className="formDiv">
            <label htmlFor="navigateur">Navigateur</label><br/>
            <select
              id="navigateur"
              name="navigateur"
              value={formData.navigateur}
              onChange={handleChange}
              required
            >
              <option disabled value="">Sélectionnez une option</option>
              <option value="Chrome">Chrome</option>
              <option value="Mozilla">Mozilla</option>
              <option value="Edge">Edge</option>
              <option value="Safari">Safari</option>
              <option value="Opéra">Opéra</option>
            </select><br/><br/>
          </div>
          <div className="formDiv">
            <label htmlFor="remarques">Remarques</label><br/>
            <textarea
              id="remarques"
              name="remarques"
              value={formData.remarques}
              onChange={handleChange}
              required
            /><br/><br/>
          </div>
          <button id="submitFormBug" type="submit">Envoyer le report</button>
        </form>
      </div>
    </div>
  )
}
