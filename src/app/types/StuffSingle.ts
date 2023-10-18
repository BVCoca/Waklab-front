import Recipe from "./Recipe";
import RecipeIngredient from "./RecipeIngredient";
import Stuff from "./Stuff";
import stuffCaracteristic from "./StuffCaracteristic";

/**
 * Utiliser uniquement sur la page de l'item
 */
export default interface StuffSingle extends Stuff {
    stuffCaracteristics : stuffCaracteristic[],
    recipes : Recipe[],
    recipeIngredients : RecipeIngredient[]
}