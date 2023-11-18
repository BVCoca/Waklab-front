import Subzone from "./Subzone";

export default interface SubzoneSearch extends Subzone {
    "hydra:member": Subzone[]
}