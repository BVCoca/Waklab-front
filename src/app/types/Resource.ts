import Rarity from "./Rarity";

export default interface Resource {
    name : string,
    slug : string,
    level : number,
    imageUrl : string,
    rarity : Rarity
}