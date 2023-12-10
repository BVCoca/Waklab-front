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
        <h2>Dis nous en plus !</h2>
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
              <option value="Problème technique">Problème technique</option>
              <option value="Problème visuel">Problème visuel</option>
              <option value="Amélioration possible">Amélioration possible</option>
              <option value="Question générale">Question générale</option>
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
              {formData.categorie === 'Problème technique' ? (
                <>
                  <option value="ProbTech1">Chargement infini</option>
                  <option value="ProbTech2">Problème sur une fonctionnalité</option>
                  <option value="ProbTech3">Page non trouvée</option>
                  <option value="ProbTech4">Autre</option>
                </>
              ) : formData.categorie === 'Problème visuel' ? (
                <>
                  <option value="ProbVisu1">Problème d`&apos;affichage</option>
                  <option value="ProbVisu2">Image manquante</option>
                  <option value="ProbVisu3">Autre</option>
                </>
              ) : formData.categorie === 'Amélioration possible' ? (
                <>
                  <option value="UpPoss1">Amélioration fonctionnelle</option>
                  <option value="UpPoss2">Amélioration visuelle</option>
                  <option value="UpPoss3">Idée à implémenter</option>
                  <option value="UpPoss4">Autre</option>
                </>
              ) : formData.categorie === 'Question générale' ? (
                <>
                  <option value="QuestGen1">Précisez dans les remarques</option>
                </>
              ) : (
                null
              )}
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
              <option value="Safari">Safari</option>
              <option value="Chrome">Chrome</option>
              <option value="Mozilla">Mozilla</option>
              <option value="Sidekick">Sidekick</option>
              <option value="Opéra">Opéra</option>
              <option value="UR Browzer">UR Browzer</option>
              <option value="Waterfox">Waterfox</option>
              <option value="Avast">Avast</option>
              <option value="Edge">Edge</option>
              <option value="Arc">Arc</option>
              <option value="Polypane">Polypane</option>
              <option value="Brave">Brave</option>
              <option value="Tor">Tor</option>
              <option value="Maxthon">Maxthon</option>
              <option value="Vivaldi">Vivaldi</option>
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
          <button id="submitFormBug" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  )
}
