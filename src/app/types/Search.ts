import Dungeon from "./Dungeon/Dungeon";
import Collection from "./Hydra/Collection";
import Mob from "./Mob/Mob";
import Resource from "./Resource/Resource";
import Stuff from "./Stuff/Stuff";

export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc'
}

export enum SortField {
    LEVEL = 'level',
    RARITY = 'rarity'
}

export interface SortOption {
    sort_field? : SortField,
    sort_order? : SortOrder,
    label : string
}

export default interface Search extends Collection {
    "hydra:member": Array<Mob|Stuff|Resource|Dungeon>
}