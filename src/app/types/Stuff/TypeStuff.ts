import Base from "../Hydra/Base";

export default interface TypeStuff extends Base {
    name : string,
    slug : string,
    icon : string
}

export interface TypeStuffAggregate extends TypeStuff {
    count : number
}