import Base from "../Hydra/Base";

export default interface Family extends Base {
    name : string,
    slug : string
}

export interface FamilyAggregate extends Family {
    count : number,
    value: string
}