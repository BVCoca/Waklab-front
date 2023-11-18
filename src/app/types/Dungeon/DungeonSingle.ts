import MobWithDrops from "../Mob/MobWithDrops";
import Subzone from "../Zone/Subzone";
import Dungeon from "./Dungeon";

export default interface DungeonSingle extends Dungeon {
    Mobs : MobWithDrops[],
    Boss : MobWithDrops,
    subzone : Subzone
}