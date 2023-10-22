import Link from "next/link";
import "./Card.css";
import CardHeader from "./CardHeader";
import {
  isMob,
  isMobDrop,
  isResource,
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
import Rarity from "@/app/types/Rarity";

interface Props {
  item: MobDrop | ResourceDrop | StuffDrop;
}

export default function CardDetailsType({ item }: Props) {
  // Extraction des niveaux
  let level: number[] = [];
  let entity: Resource | Mob | Stuff | null;
  let rarity: Rarity | null;

  if (isResourceDrop(item)) {
    entity = item.resource;
    level = [entity.level];
    rarity = entity.rarity;
  } else if (isMobDrop(item)) {
    entity = item.mob;
    level = [entity.levelMin, entity.levelMax];
    rarity = null;
  } else if (isStuffDrop(item)) {
    entity = item.stuff;
    level = [entity.level];
    rarity = entity.rarity;
  } else {
    entity = null;
    rarity = null;
  }

  if (entity == null) {
    return "";
  }

  return (
    <Link href={entity["@id"].slice(4)} className="cardDetailsTypeContainer">
      <div>
        <CardHeader level={level} rarity={rarity} />
        <div className="cardImageValueContainer">
          <ImageResizer
            className=""
            src={entity.imageUrl}
            alt={`Image ${entity.name}`}
            width={100}
            height={100}
          />
          {(isResourceDrop(item) || isStuffDrop(item)) && (
            <p className="valueDrops">{item.value} %</p>
          )}
        </div>
        <h3 className="">{entity.name}</h3>
        {isMob(entity) && <FamilyView family={entity.family} />}
        {isStuff(item) && <TypeView type={item.type} />}
      </div>
    </Link>
  );
}
