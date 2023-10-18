import Family from "../Family";

export default interface Mob {
    name : string,
    slug : string,
    imageUrl : string,
    family : Family,
    levelMin: number,
    levelMax: number
}