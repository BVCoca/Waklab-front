import "@/app/styles/globals.css"
import "./home.css"
import { search } from "@/app/services/common"
import Mob from "@/app/types/Mob/Mob"
import Resource from "@/app/types/Resource/Resource"
import Stuff from "@/app/types/Stuff/Stuff"
import Card from "../card/Card"

export default async function Home() {

    const results = await search("chacha")

    return (
        <div id="cardList" className="card-list">
            {results["hydra:member"].map((item : Mob|Resource|Stuff) => {
               return <Card key={item["@id"]} item={item}/>
            })}
        </div> 
    )
}