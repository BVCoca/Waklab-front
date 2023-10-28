import Mob from "@/app/types/Mob/Mob";
import Resource from "@/app/types/Resource/Resource";
import Stuff from "@/app/types/Stuff/Stuff";
import Link from "next/link";
import "./Card.css";
import CardHeader from "./CardHeader";
import { isDungeon, isMob, isResource, isStuff } from "@/app/types/isType";
import FamilyView from "../common/FamilyView";
import TypeView from "../common/TypeView";
import Image from "next/image";
import Dungeon from "@/app/types/Dungeon/Dungeon";
import DongeonLabel from "../common/DongeonLabel";

interface Props {
  item: Mob | Resource | Stuff | Dungeon;
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

  if (isResource(item) || isStuff(item)) {
    rarity = item.rarity;
  }

  return (
    <Link href={item["@id"].slice(4)} className="cardContainer">
      <CardHeader level={level} rarity={rarity} />
      <Image
        className="cardImage"
        src={item.imageUrl}
        alt=""
        width={100}
        height={100}
      />
      <h3 className="cardName">{item.name}</h3>
      {isMob(item) && <FamilyView family={item.family} />}
      {(isStuff(item) || isResource(item)) && <TypeView type={item.type} />}
      {isDungeon(item) && <DongeonLabel />}
    </Link>
  );
}
