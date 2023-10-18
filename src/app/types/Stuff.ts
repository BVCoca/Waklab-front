import Rarity from "./Rarity";
import TypeStuff from "./TypeStuff";

export default interface Stuff {
    name : string,
    slug : string,
    level : number,
    imageUrl : string,
    rarity : Rarity,
    type : TypeStuff
}