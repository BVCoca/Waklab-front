import Link from "next/link";
import "./CardDetailsType.css";
import CardHeader from "./CardHeader";
import {
  isMob,
  isRecipeIngredientFromRecipe,
  isResourceDrop,
  isStuff,
  isStuffDrop,
} from "@/app/types/isType";
import ImageResizer from "../common/ImageResizer";
import FamilyView from "../common/FamilyView";
import TypeView from "../common/TypeView";
import ResourceDrop from "@/app/types/Resource/ResourceDrop";
import Resource from "@/app/types/Resource/Resource";
import StuffDrop from "@/app/types/Stuff/StuffDrop";
import Stuff from "@/app/types/Stuff/Stuff";
import Rarity from "@/app/types/Rarity";
import RecipeIngredientFromRecipe from "@/app/types/Recipe/RecipeIngredientFromRecipe";

interface Props {
  item: ResourceDrop | StuffDrop | RecipeIngredientFromRecipe;
}

export default function CardDetailsType({ item }: Props) {

  // Extraction des niveaux
  let level: number[] = [];
  let entity: Resource | Stuff | null = null;
  let rarity: Rarity | null = null;

  if (isResourceDrop(item)) {
    entity = item.resource;
    level = [entity.level];
    rarity = entity.rarity;
  } else if (isStuffDrop(item)) {
    entity = item.stuff;
    level = [entity.level];
    rarity = entity.rarity;
  } else if(isRecipeIngredientFromRecipe(item)) {
    if(item.resource) {
      entity = item.resource;
      level = [entity.level];
      rarity = entity.rarity;
    } else if(item.stuff) {
      entity = item.stuff;
      level = [entity.level];
      rarity = entity.rarity;
    }
  }

  if (entity == null) {
    return "";
  }

  return (
    <Link href={entity["@id"].slice(4)} className="cardDetailsTypeContainer">
      <div className="linkCardDetailsContainer">
        <CardHeader level={level} rarity={rarity} isSmall={true} />
        <div className="cardImageValueContainer">
          <ImageResizer
            className=""
            src={entity.imageUrl}
            alt={`Image ${entity.name}`}
            width={80}
            height={80}
          />
          {(isResourceDrop(item) || isStuffDrop(item)) && (
            <p className="valueDrops">{item.value} %</p>
          )}
          {isRecipeIngredientFromRecipe(item) && (
            <p className="valueDrops">{item.quantity} X</p>
          )}
        </div>
        <h3>{entity.name}</h3>
        {isMob(entity) && <FamilyView family={entity.family} />}
        {!isMob(entity) && <TypeView type={entity.type} />}
      </div>
    </Link>
  );
}
