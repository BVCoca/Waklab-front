import Base from "../Hydra/Base";
import RecipeFromRecipeIngredient from "./RecipeFromRecipeIngredient";

export default interface RecipeIngredient extends Base {
    recipe : RecipeFromRecipeIngredient,
    quantity : number
}