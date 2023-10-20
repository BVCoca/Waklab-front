import Base from "../Hydra/Base";
import Stuff from "./Stuff";

export default interface StuffDrop extends Base {
    stuff : Stuff,
    value : number
}