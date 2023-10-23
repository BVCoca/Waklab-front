import Header from "../components/header/header";
import "../components/menu/menu.css"
import { searchResources } from "../services/resource";
import Resource from "../types/Resource/Resource";
import Card from "../components/card/Card";

export default async function Page() {

  const results = await searchResources("chacha")
  
  return (
    <div id="content">
        <Header />
        <div id="cardList">
            {results["hydra:member"].map((item : Resource) => {
                return <Card key={item["@id"]} item={item}/>
            })}
        </div>
    </div>
  )
}
