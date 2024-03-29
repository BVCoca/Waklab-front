import Link from "next/link";
import "./CardDetailsType.css";
import CardHeader from "./CardHeader";
import {
  isMob,
  isRecipeIngredientFromRecipe,
  isResourceDrop,
  isStuffDrop,
} from "@/app/types/isType";
import FamilyView from "../common/FamilyView";
import TypeView from "../common/TypeView";
import ResourceDrop from "@/app/types/Resource/ResourceDrop";
import Resource from "@/app/types/Resource/Resource";
import StuffDrop from "@/app/types/Stuff/StuffDrop";
import Stuff from "@/app/types/Stuff/Stuff";
import Rarity from "@/app/types/Rarity";
import RecipeIngredientFromRecipe from "@/app/types/Recipe/RecipeIngredientFromRecipe";
import ImageWithFallback from "../common/ImageWithFallback";

interface Props {
  item: ResourceDrop | StuffDrop | RecipeIngredientFromRecipe,
  theme? : string
}

export default function CardDetailsType({ item, theme = '' }: Props) {

  // Extraction des niveaux
  let level: number[] = [];
  let entity: Resource | Stuff | null = null;
  let rarity: Rarity | null = null;

  if (isResourceDrop(item) && item.resource !== undefined) {
    entity = item.resource;
    if (entity === undefined) {
      return ""
    }
    level = [entity.level];
    rarity = entity.rarity;
  } else if (isStuffDrop(item) && item.stuff !== undefined) {
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

  if (entity == null || level == null) {
    return "";
  }

  return (
    <Link href={entity["@id"].slice(4)} className={`cardDetailsTypeContainer ${theme}`}>
      <div className="linkCardDetailsContainer">
        <CardHeader level={level} rarity={rarity} isSmall={true} />
        <div className="cardImageValueContainer">
          <ImageWithFallback
            className=""
            src={entity.imageUrl}
            alt={`Image ${entity.name}`}
            width={80}
            height={80}
          />
          {(isResourceDrop(item) || isStuffDrop(item)) && (
            <p className="valueDrops">{+item.value.toFixed(3)} %</p>
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
