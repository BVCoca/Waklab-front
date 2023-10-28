import Base from "../Hydra/Base";
import MobWithDrops from "./MobWithDrops";

/**
 * Utiliser uniquement sur la page de l'item
 */
export default interface MobSingle extends MobWithDrops, Base {
    
    isCapturable: boolean,
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
    hp : number
}