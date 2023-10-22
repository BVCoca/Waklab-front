import Mob from "@/app/types/Mob/Mob"
import Resource from "@/app/types/Resource/Resource"
import Stuff from "@/app/types/Stuff/Stuff"
import CardHeader from "./CardHeader"
import Link from "next/link"
import ImageResizer from "../common/ImageResizer"
import FamilyView from "../common/FamilyView"
import TypeView from "../common/TypeView"
import { isMob, isStuff } from "@/app/types/isType"
import "./LongCard.css"

interface Props {
    item : Mob|Stuff|Resource,
    value : number|null
}

export default function LongCard({item , value = null} : Props) {

    let level = [];

    if (isMob(item)) {
        level = [item.levelMin, item.levelMax];
    } else {
        level = [item.level];
    }

    let rarity = null;

    if (!isMob(item)) {
        rarity = item.rarity;
    }

    return(
        <Link href={item["@id"].slice(4)} className="cardContainer">
            <CardHeader level={level} rarity={rarity} />
            <div className="cardContent">
                <ImageResizer
                    className="cardImage"
                    src={item.imageUrl}
                    alt=""
                    width={100}
                    height={100}
                />
                <div>
                    <h3 className="cardName">{item.name}</h3>
                    {isMob(item) && <FamilyView family={item.family} />}
                    {isStuff(item) && <TypeView type={item.type} />}
                </div>
                {value && <span className="cardValue">{value} %</span>}
            </div>
        </Link>
    )
}