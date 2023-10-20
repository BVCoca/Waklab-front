import Base from "../Hydra/Base";
import Caracteristic from "./Caracteristic";

export default interface stuffCaracteristic extends Base {
    caracteristic : Caracteristic,
    value : number
}