import Mob from "./Mob";
import ResourceDrop from "./ResourceDrop";
import StuffDrop from "./StuffDrop";

/**
 * Utiliser uniquement sur la page de l'item
 */
export default interface MobSingle extends Mob {
    resourceDrops : ResourceDrop[],
    stuffDrops : StuffDrop[],
    isCapturable: boolean,
    name: string,
    slug: string,
    actionPoints: number,
    movementPoints: number,
    initiative: number,
    tackle: number,
    dodge: number,
    parry: number,
    criticalHit: number,
    attackWater: number,
    attackEarth: number,
    attackWind: number,
    attackFire: number,
    resWater: number,
    resEarth: number,
    resWind: number,
    resFire: number,
    levelMin: number,
    levelMax: number,
    hp : number
}