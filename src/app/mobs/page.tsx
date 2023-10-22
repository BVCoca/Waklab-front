import Header from "../components/header/header";
import "../components/homepage/home.css";
import { searchMobs } from "../services/mob";
import Mob from "../types/Mob/Mob";
import Resource from "../types/Resource/Resource";
import Stuff from "../types/Stuff/Stuff";
import Card from "../components/card/Card";

export default async function Page() {
  const results = await searchMobs("chacha");

  return (
    <div id="content">
      <Header />
      <div id="cardList">
        {results["hydra:member"].map((item: Mob | Resource | Stuff) => {
          return <Card key={item["@id"]} item={item} />;
        })}
      </div>
    </div>
  );
}
