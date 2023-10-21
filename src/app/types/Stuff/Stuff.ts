import Base from "../Hydra/Base";
import Rarity from "../Rarity";
import TypeStuff from "./TypeStuff";

export default interface Stuff extends Base {
    name : string,
    slug : string,
    level : number,
    imageUrl : string,
    rarity : Rarity,
    type : TypeStuff
}