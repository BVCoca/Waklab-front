import ResourceDrop from "../Resource/ResourceDrop";
import StuffDrop from "../Stuff/StuffDrop";
import Mob from "./Mob";

export default interface MobWithDrops extends Mob {
    resourceDrops : ResourceDrop[],
    stuffDrops : StuffDrop[],
}