import Base from "../Hydra/Base";
import Mob from "./Mob";

export default interface MobDrop extends Base {
    mob : Mob,
    value : number
}