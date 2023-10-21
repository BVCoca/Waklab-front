import Base from "./Hydra/Base";
import Collection from "./Hydra/Collection";

export interface Slug extends Base {
    slug: string
}

export default interface Slugs extends Collection {
    "hydra:member" : Slug[]
}