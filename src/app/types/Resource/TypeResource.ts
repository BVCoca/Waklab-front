import Base from "../Hydra/Base";

export default interface TypeResource extends Base {
    name : string,
    slug : string,
    icon : string
}

export interface TypeResourceAggregate extends TypeResource {
    count : number,
    value: string
}