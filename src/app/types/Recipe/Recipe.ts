import Base from "../Hydra/Base";
import Job from "./Job";
import RecipeIngredientFromRecipe from "./RecipeIngredientFromRecipe";
import RecipeIngredientFromRecipeQty from "./RecipeIngredientFromRecipeQty";

export default interface Recipe extends Base {
    job : Job,
    job_level : number,
    recipeIngredients : RecipeIngredientFromRecipe[] | RecipeIngredientFromRecipeQty[]
}