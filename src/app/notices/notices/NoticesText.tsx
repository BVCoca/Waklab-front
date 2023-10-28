import "./notices.css"

export default function NoticesText() {

    return (
      <div id="notices">
        <h2>Ce site est édité par :</h2>
        <p>
          VAIQUE Benjamin <br/>
          Adresse <br/>
          Code postal + ville  <br/>
          Tel : +33 .... <br/>
          E-mail :  <br/>

          Hébergement :  <br/><br/>

          {/* (Tous les infos sur l'hébergeur du site à savoir le serveur) */}
          Nom de l&apos;entreprise : <br/>
          Adresse du siège de l&apos;entreprise : <br/>
          Ville + code postal + pays <br/>
          Tel : +33 ....<br/>
          E-mail : <br/>

          Directeur de publication : <br/><br/>

          VAIQUE Benjamin
        </p>
      </div>
    );
  }