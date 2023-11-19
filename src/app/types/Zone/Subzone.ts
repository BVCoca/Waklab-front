import Base from "../Hydra/Base";
import Zone from "./Zone";

export default interface Subzone extends Base {
    name : string,
    slug : string,
    imageUrl : string,
    levelMin: number,
    levelMax: number,
    Zone : Zone
}