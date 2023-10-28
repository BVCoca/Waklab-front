import Dungeon from "./Dungeon/Dungeon";
import Mob from "./Mob/Mob";
import MobDrop from "./Mob/MobDrop";
import RecipeIngredientFromRecipe from "./Recipe/RecipeIngredientFromRecipe";
import Resource from "./Resource/Resource";
import ResourceDrop from "./Resource/ResourceDrop";
import Stuff from "./Stuff/Stuff";
import StuffDrop from "./Stuff/StuffDrop";

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

export {isMob, isResource, isStuff, isDungeon, isResourceDrop, isMobDrop, isStuffDrop, isRecipeIngredientFromRecipe, isWeapon}