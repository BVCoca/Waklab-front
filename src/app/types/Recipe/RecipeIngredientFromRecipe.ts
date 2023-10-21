import Base from "../Hydra/Base";
import Resource from "../Resource/Resource";
import Stuff from "../Stuff/Stuff";

export default interface RecipeIngredientFromRecipe extends Base {
    resource : Resource|undefined,
    stuff : Stuff|undefined,
    quantity : number
}