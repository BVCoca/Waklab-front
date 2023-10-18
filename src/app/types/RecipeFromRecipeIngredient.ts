import Job from "./Job";
import Resource from "./Resource";
import Stuff from "./Stuff";

export default interface RecipeFromRecipeIngredient {
    job : Job,
    job_level : number,
    stuff : Stuff|undefined,
    resource : Resource|undefined
}