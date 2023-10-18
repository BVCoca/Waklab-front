import Job from "./Job";
import Resource from "../Resource/Resource";
import Stuff from "../Stuff/Stuff";

export default interface RecipeFromRecipeIngredient {
    job : Job,
    job_level : number,
    stuff : Stuff|undefined,
    resource : Resource|undefined
}