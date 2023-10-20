import Collection from "../Hydra/Collection";
import Mob from "./Mob";

export default interface MobSearch extends Collection {
    "hydra:member": Mob[]
}