import Dungeon from "./Dungeon/Dungeon";
import Collection from "./Hydra/Collection";
import { FamilyAggregate } from "./Mob/Family";
import Mob from "./Mob/Mob";
import { RarityAggregate } from "./Rarity";
import Resource from "./Resource/Resource";
import { TypeResourceAggregate } from "./Resource/TypeResource";
import Stuff from "./Stuff/Stuff";
import { TypeStuffAggregate } from "./Stuff/TypeStuff";
import Subzone from "./Zone/Subzone";

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

export interface Aggregate {
    minLevel : {
        value : number
    },
    maxLevel : {
        value : number
    },
    family : FamilyAggregate[],
    rarity : RarityAggregate[],
    type : TypeResourceAggregate[] | TypeStuffAggregate[]
}

export default interface Search extends Collection {
    "hydra:member": Array<Mob|Stuff|Resource|Dungeon|Subzone>
}