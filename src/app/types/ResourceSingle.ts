import Recipe from "./Recipe";
import RecipeIngredient from "./RecipeIngredient";
import Resource from "./Resource";
import ResourceDrop from "./ResourceDrop";

/**
 * Utiliser uniquement sur la page de l'item
 */
export default interface ResourceSingle extends Resource {
    resourceDrops : ResourceDrop[],
    recipes : Recipe[],
    recipeIngredients : RecipeIngredient[]
}