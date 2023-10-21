import Base from "../Hydra/Base";
import Rarity from "../Rarity";

export default interface Resource extends Base {
    name : string,
    slug : string,
    level : number,
    imageUrl : string,
    rarity : Rarity
}