import Dungeon from "./Dungeon/Dungeon";
import Family from "./Mob/Family";
import Mob from "./Mob/Mob";
import MobDrop from "./Mob/MobDrop";
import Rarity, { RarityAggregate } from "./Rarity";
import RecipeIngredientFromRecipe from "./Recipe/RecipeIngredientFromRecipe";
import Resource from "./Resource/Resource";
import ResourceDrop from "./Resource/ResourceDrop";
import TypeResource from "./Resource/TypeResource";
import Stuff from "./Stuff/Stuff";
import StuffDrop from "./Stuff/StuffDrop";
import TypeStuff from "./Stuff/TypeStuff";

function isMob(item : any): item is Mob {
    return item["@type"] === "Mobs";
}

function isResource(item : any): item is Resource {
    return item["@type"] === "Resource";
}

function isStuff(item : any): item is Stuff {
    return item["@type"] === "Stuff";
}

function isDungeon(item : any): item is Dungeon {
    return item["@type"] === "Dungeon";
}

function isResourceDrop(item: any): item is ResourceDrop {
    return item["@type"] === "ResourceDrop";
}

function isMobDrop(item: any): item is MobDrop {
    return item["@type"] === "MobDrop";
}

function isStuffDrop(item: any): item is StuffDrop {
    return item["@type"] === "StuffDrop";
}

function isRecipeIngredientFromRecipe(item: any): item is RecipeIngredientFromRecipe {
    return item["@type"] === "RecipeIngredient";
}

function isWeapon(item : Stuff): boolean {
    return ['armes-2-mains', 'armes-1-main', 'seconde-main'].includes(item.type.slug)
}

function isRarity(item : any) : item is Rarity {
    return item["@type"] === "Rarity";
}

function isFamily(item : any) : item is Family {
    return item["@type"] === "Family";
}

function isType(item : any) : item is TypeStuff|TypeResource {
    return item["@type"] === "Type";
}

export {isMob, isResource, isStuff, isDungeon, isResourceDrop, isMobDrop, isStuffDrop, isRecipeIngredientFromRecipe, isWeapon, isRarity, isFamily, isType}