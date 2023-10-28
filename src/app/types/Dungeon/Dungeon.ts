import Base from "../Hydra/Base";

export default interface Dungeon extends Base {
    name : string,
    slug : string,
    level : number,
    imageUrl : string,
    max_player: number,
    room_count: number
}