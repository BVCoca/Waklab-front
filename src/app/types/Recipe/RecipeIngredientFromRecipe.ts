import Resource from "../Resource/Resource";
import Stuff from "../Stuff/Stuff";

export default interface RecipeIngredientFromRecipe {
    resource : Resource|undefined,
    stuff : Stuff|undefined,
    quantity : number
}