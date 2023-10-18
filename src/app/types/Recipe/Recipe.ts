import Job from "./Job";
import RecipeIngredientFromRecipe from "./RecipeIngredientFromRecipe";

export default interface Recipe {
    job : Job,
    job_level : number,
    recipeIngredients : RecipeIngredientFromRecipe[]
}