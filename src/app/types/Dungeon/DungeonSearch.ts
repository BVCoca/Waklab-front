import Collection from "../Hydra/Collection";
import Dungeon from "./Dungeon";

export default interface DungeonSearch extends Collection {
    "hydra:member": Dungeon[]
}