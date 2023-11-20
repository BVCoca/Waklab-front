import Mob from "@/app/types/Mob/Mob";
import Resource from "@/app/types/Resource/Resource";
import Stuff from "@/app/types/Stuff/Stuff";
import Link from "next/link";
import "./Card.css";
import CardHeader from "./CardHeader";
import { isDungeon, isMob, isResource, isStuff, isSubzone } from "@/app/types/isType";
import FamilyView from "../common/FamilyView";
import TypeView from "../common/TypeView";
import Dungeon from "@/app/types/Dungeon/Dungeon";
import DungeonLabel from "../common/DungeonLabel";
import ImageWithFallback from "../common/ImageWithFallback";
import Subzone from "@/app/types/Zone/Subzone";
import stuffCaracteristic from "@/app/types/Stuff/StuffCaracteristic";
import Image from "next/image";

interface Props {
  item: Mob | Resource | Stuff | Dungeon | Subzone;
  forwardRef? : any
}

export default function Card({ item, forwardRef }: Props) {
  
  // Extraction des niveaux
  let level = [];

  if (isMob(item) || isSubzone(item)) {
    level = [item.levelMin, item.levelMax];
  } else {
    level = [item.level];
  }

  let rarity = null;

  if (isResource(item) || isStuff(item)) {
    rarity = item.rarity;
  }

  return (
    <Link href={item["@id"].slice(4)} className="cardContainer" ref={forwardRef}>
      <CardHeader level={level} rarity={rarity} />
      <ImageWithFallback
        className={isSubzone(item) ? "cardImage zone" : "cardImage"}
        src={item.imageUrl}
        alt=""
        width={100}
        height={100}
      />
      <h3 className="cardName">{item.name}</h3>
      {isMob(item) && <FamilyView family={item.family} />}
      {(isStuff(item) || isResource(item)) && <TypeView type={item.type} />}
      {isSubzone(item) && <TypeView type={item.Zone} />}
      {isDungeon(item) && <DungeonLabel />}
      {isStuff(item) && item.stuffCaracteristics && item.stuffCaracteristics.length > 0 && (
        <div className="stuffCaracContainerCard">
          {item.stuffCaracteristics.map((stuffCarac : stuffCaracteristic) => (
            <div className="caracContainerCard" key={stuffCarac["@id"]}>
              <ImageWithFallback className="caracImgCard" alt="" src={stuffCarac.caracteristic.icon} width={20} height={20} />
              <p className="caracLabelCard"><span>{stuffCarac.value}</span> {stuffCarac.caracteristic.name}</p>
            </div>
          ))}
        </div>
      )}
    </Link>
  );
}
