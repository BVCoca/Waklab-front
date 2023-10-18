import MobDrop from "../Mob/MobDrop";
import Recipe from "../Recipe/Recipe";
import RecipeIngredient from "../Recipe/RecipeIngredient";
import Resource from "./Resource";

/**
 * Utiliser uniquement sur la page de l'item
 */
export default interface ResourceSingle extends Resource {
    resourceDrops : MobDrop[]
    recipes : Recipe[],
    recipeIngredients : RecipeIngredient[]
}