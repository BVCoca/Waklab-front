import Base from "../Hydra/Base";

export default interface Job extends Base {
    name : string,
    slug : string,
    type : string,
    icon : string
}