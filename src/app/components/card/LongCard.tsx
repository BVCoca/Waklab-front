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
import { ReactNode } from "react"

interface Props {
    item : Mob|Stuff|Resource,
    value? : ReactNode,
    theme? : string
}

export default function LongCard({item , value = null, theme = ''} : Props) {

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
        <Link href={item["@id"].slice(4)} className={`longCardContainer ${theme}`}>
            <CardHeader level={level} rarity={rarity} />
            <div className="longCardContent">
                <ImageResizer
                    className="longCardImage"
                    src={item.imageUrl}
                    alt=""
                    width={100}
                    height={100}
                />
                <div className="longCardData">
                    <h3 className="longCardName">{item.name}</h3>
                    {isMob(item) && <FamilyView family={item.family} />}
                    {isStuff(item) && <TypeView type={item.type} isLong={true}/>}
                </div>
                {value && <span className="longCardValue">{value}</span>}
            </div>
        </Link>
    )
}