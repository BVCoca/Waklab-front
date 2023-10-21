import Mob from "@/app/types/Mob/Mob";
import Resource from "@/app/types/Resource/Resource";
import Stuff from "@/app/types/Stuff/Stuff";
import Link from "next/link";
import "./Card.css";
import CardHeader from "./CardHeader";
import { isMob, isResource, isStuff } from "@/app/types/isType";
import ImageResizer from "../common/ImageResizer";
import FamilyView from "../common/FamilyView";
import TypeView from "../common/TypeView";

interface Props {
  item: Mob | Resource | Stuff;
}

export default function Card({ item }: Props) {
  // Extraction des niveaux
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

  return (
    <Link href={item["@id"].slice(4)} className="cardContainer">
      <CardHeader level={level} rarity={rarity} />
      <ImageResizer
        className="cardImage"
        src={item.imageUrl}
        alt=""
        width={100}
        height={100}
      />
      <h3 className="cardName">{item.name}</h3>
      {isMob(item) && <FamilyView family={item.family} />}
      {isStuff(item) && <TypeView type={item.type} />}
    </Link>
  );
}
