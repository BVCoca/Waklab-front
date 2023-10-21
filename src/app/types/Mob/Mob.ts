import Base from "../Hydra/Base";
import Family from "./Family";

export default interface Mob extends Base {
    name : string,
    slug : string,
    imageUrl : string,
    family : Family,
    levelMin: number,
    levelMax: number
}