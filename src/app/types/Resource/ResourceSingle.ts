import Base from "../Hydra/Base";
import MobDrop from "../Mob/MobDrop";
import Recipe from "../Recipe/Recipe";
import RecipeIngredient from "../Recipe/RecipeIngredient";
import RecipeQty from "../Recipe/RecipeQty";
import Resource from "./Resource";
import Sublimation from "./Sublimation";

/**
 * Utiliser uniquement sur la page de l'item
 */
export default interface ResourceSingle extends Resource, Base {
    resourceDrops : MobDrop[]
    recipes : Recipe[] | RecipeQty[],
    recipeIngredients : RecipeIngredient[],
    description : string,
    sublimation? : Sublimation
}