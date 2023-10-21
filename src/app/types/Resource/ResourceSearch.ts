import Collection from "../Hydra/Collection";
import Resource from "./Resource";

export default interface ResourceSearch extends Collection {
    "hydra:member": Resource[]
}