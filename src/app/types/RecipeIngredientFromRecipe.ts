import Resource from "./Resource";
import Stuff from "./Stuff";

export default interface RecipeIngredientFromRecipe {
    resource : Resource|undefined,
    stuff : Stuff|undefined,
    quantity : number
}