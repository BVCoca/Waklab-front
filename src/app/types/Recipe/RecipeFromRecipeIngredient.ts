import Job from "./Job";
import Resource from "../Resource/Resource";
import Stuff from "../Stuff/Stuff";
import Base from "../Hydra/Base";

export default interface RecipeFromRecipeIngredient extends Base {
    job : Job,
    job_level : number,
    stuff : Stuff|undefined,
    resource : Resource|undefined
}