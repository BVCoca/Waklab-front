import MobDrop from "../Mob/MobDrop";
import Recipe from "../Recipe/Recipe";
import RecipeIngredient from "../Recipe/RecipeIngredient";
import Stuff from "./Stuff";
import stuffCaracteristic from "./StuffCaracteristic";

/**
 * Utiliser uniquement sur la page de l'item
 */
export default interface StuffSingle extends Stuff {
    stuffCaracteristics : stuffCaracteristic[],
    stuffDrops : MobDrop[]
    recipes : Recipe[],
    recipeIngredients : RecipeIngredient[]
}