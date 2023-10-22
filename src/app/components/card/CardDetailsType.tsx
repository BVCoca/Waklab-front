import Link from "next/link";
import "./Card.css";
import CardHeader from "./CardHeader";
import {
  isMob,
  isMobDrop,
  isResourceDrop,
  isStuff,
  isStuffDrop,
} from "@/app/types/isType";
import ImageResizer from "../common/ImageResizer";
import FamilyView from "../common/FamilyView";
import TypeView from "../common/TypeView";
import ResourceDrop from "@/app/types/Resource/ResourceDrop";
import MobDrop from "@/app/types/Mob/MobDrop";
import Mob from "@/app/types/Mob/Mob";
import Resource from "@/app/types/Resource/Resource";
import StuffDrop from "@/app/types/Stuff/StuffDrop";
import Stuff from "@/app/types/Stuff/Stuff";

interface Props {
  item: MobDrop | ResourceDrop | StuffDrop;
}

export default function CardDetailsType({ item }: Props) {
  // Extraction des niveaux
  let level: number[] = [];
  let entity: Resource | Mob | Stuff | null;

  if (isResourceDrop(item)) {
    entity = item.resource;
    level = [entity.level];
  } else if (isMobDrop(item)) {
    entity = item.mob;
    level = [entity.levelMin, entity.levelMax];
  } else if (isStuffDrop(item)) {
    entity = item.stuff;
    level = [entity.level];
  } else {
    entity = null;
  }

  let rarity = null;

  if (entity == null) {
    return "";
  }

  return (
    <Link href={entity["@id"].slice(4)} className="cardDetailsTypeContainer">
      <CardHeader level={level} rarity={rarity} />
      <ImageResizer
        className="cardImage"
        src={entity.imageUrl}
        alt=""
        width={100}
        height={100}
      />
      {item.value}
      <h3 className="cardName">{entity.name}</h3>
      {isMob(entity) && <FamilyView family={entity.family} />}
      {isStuff(item) && <TypeView type={item.type} />}
    </Link>
  );
}
