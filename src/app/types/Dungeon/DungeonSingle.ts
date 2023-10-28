import MobWithDrops from "../Mob/MobWithDrops";
import Dungeon from "./Dungeon";

export default interface DungeonSingle extends Dungeon {
    Mobs : MobWithDrops[],
    Boss : MobWithDrops
}