import Base from "../Hydra/Base";
import Resource from "./Resource";

export default interface ResourceDrop extends Base {
    resource : Resource,
    value : number
}