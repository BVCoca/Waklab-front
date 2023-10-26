import Base from "../Hydra/Base";
import Rarity from "../Rarity";
import TypeResource from "./TypeResource";

export default interface Resource extends Base {
    name : string,
    slug : string,
    level : number,
    imageUrl : string,
    rarity : Rarity,
    type : TypeResource
}