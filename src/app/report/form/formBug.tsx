import "./formBug.css"

export default function FormBug() {

  return (
    <div id="formBug">
      <form action="POST">
        <label htmlFor="categorie">Catégorie</label><br/>
        <input type="text" id="categorie" name="categorie"/><br/><br/>
        
        <label htmlFor="type">Type</label><br/>
        <input type="text" id="type" name="type"/><br/><br/>
        
        <label htmlFor="url">URL</label><br/>
        <input type="text" id="url" name="url"/><br/><br/>
        
        <label htmlFor="navigateur">Navigateur</label><br/>
        <input type="text" id="navigateur" name="navigateur"/><br/><br/>
        
        <label htmlFor="remarques">Remarques</label><br/>
        <textarea id="remarques" name="remarques"></textarea><br/><br/>
        
        <label htmlFor="images">Screens</label><br/>
        <input type="file" id="images" name="images" accept="image/*"/><br/><br/>
        
        <input id="" type="submit" value="Envoyer"/>
      </form>
    </div>
  );
}
