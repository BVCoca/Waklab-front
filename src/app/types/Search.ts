import Dungeon from "./Dungeon/Dungeon";
import Collection from "./Hydra/Collection";
import Mob from "./Mob/Mob";
import Resource from "./Resource/Resource";
import Stuff from "./Stuff/Stuff";

export default interface Search extends Collection {
    "hydra:member": Array<Mob|Stuff|Resource|Dungeon>
}