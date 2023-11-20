import Base from "../Hydra/Base";
import MobDrop from "../Mob/MobDrop";
import Recipe from "../Recipe/Recipe";
import RecipeIngredient from "../Recipe/RecipeIngredient";
import Stuff from "./Stuff";
import stuffCaracteristic from "./StuffCaracteristic";

/**
 * Utiliser uniquement sur la page de l'item
 */
export default interface StuffSingle extends Stuff, Base {
    stuffDrops : MobDrop[]
    recipes : Recipe[],
    recipeIngredients : RecipeIngredient[],
    description : string,
    costPa : number,
    requiredPo : number,
    effectType : string,
    effectValue : number,
    criticalEffectValue : number
}