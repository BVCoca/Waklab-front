import Dungeon from "../Dungeon/Dungeon";
import FamilyMobs from "../Mob/FamilyMobs";
import Resource from "../Resource/Resource";
import Subzone from "./Subzone";

export default interface SubzoneSingle extends Subzone {
    resources : Resource[],
    mobs : FamilyMobs[],
    dungeons : Dungeon[]
}