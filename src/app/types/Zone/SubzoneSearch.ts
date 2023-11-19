import Collection from "../Hydra/Collection";
import Subzone from "./Subzone";

export default interface SubzoneSearch extends Collection {
    "hydra:member": Subzone[]
}