import Collection from "../Hydra/Collection";
import Stuff from "./Stuff";

export default interface StuffSearch extends Collection {
    "hydra:member": Stuff[]
}