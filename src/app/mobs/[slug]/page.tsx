import Image from "next/image";
import { getMob } from "@/app/services/mob";
import MobSingle from "@/app/types/Mob/MobSingle";
import "./mobDetails.css"
import HeaderDetails from "@/app/components/headerDetails/headerDetails";


interface Props {
    mobSingle: MobSingle; 
    params : {
        slug : string
    }
}

export default async function MobDetails({ params }: Props) {

    const mob = await getMob(params.slug);
    console.log(mob);

    function nFormatter(num: number, digits:number): string {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      }
      

    if (!mob) {
        return <p>Monstre non trouvé</p>;
    }

    return (
    <div className="detailsContent">
        <HeaderDetails />
        <div className="mobStatsContainer">
            <div className="imageMobContainer">
                <Image width={150} height={150} src={mob.imageUrl ? mob.imageUrl : "/mobDetailsIcon/healthHearth.svg"} alt={`Image du monstre ${mob.name}`}/>
                <h3>{mob.name}</h3>
                <p className="family">Famille : {mob.family ? mob.family.name : "Inconnu"}</p>
            </div>

            <div className="primaryStatsMobContainer">
                <div className="healthMobContainer">
                    <div className="valueContainer">
                        <div className="tooltip">
                            <span className="tooltiptext">{mob.hp.toLocaleString()} HP</span>
                            <Image src="/mobDetailsIcon/healthHearth.svg" alt="Image de la santé du monstre" width={100} height={93}/>
                            <span id="valueHealth">{nFormatter(mob.hp, 0)}</span>
                        </div>
                    </div>
                    <div className="actionMovementContainer">
                        <div className="valueContainer">
                            <Image src="/mobDetailsIcon/actionstar.svg" alt="Image de la santé du monstre" width={58} height={58}/>
                            <span id="valueAction">{mob.actionPoints}</span>
                        </div>
                        <div className="valueContainer">
                            <Image src="/mobDetailsIcon/movementsquare.svg" alt="Image de la santé du monstre" width={58} height={58}/>
                            <span id="valueMovement">{mob.movementPoints}</span>
                        </div>
                    </div>
                </div>

                <div className="helpStatsMobContainer">
                    <ul>
                        <li className="lineValue"><Image src="/mobDetailsIcon/iconIni.png" alt="Icône Initiative" width={27} height={20}/><span>Initiative : </span><span className="valueHelpStats">{mob.initiative}</span></li>
                        <li className="lineValue"><Image src="/mobDetailsIcon/iconTac.png" alt="Icône Tacle" width={27} height={20}/><span>Tacle : </span><span className="valueHelpStats">{mob.tackle}</span></li>
                        <li className="lineValue"><Image src="/mobDetailsIcon/iconEsq.png" alt="Icône Esquive" width={27} height={20}/><span>Esquive : </span><span className="valueHelpStats">{mob.dodge}</span></li>
                        <li className="lineValue"><Image src="/mobDetailsIcon/iconPar.png" alt="Icône Parade" width={27} height={20}/><span>Parade : </span><span className="valueHelpStats">{mob.parry} %</span></li>
                        <li className="lineValue"><Image src="/mobDetailsIcon/iconCc.png" alt="Icône Coup Critique" width={27} height={20}/><span>Coup Critique : </span><span className="valueHelpStats">{mob.criticalHit} %</span></li>
                    </ul>
                </div>
            </div>

            <div className="secondaryStatsMobContainer">

            </div>

            <div className="infoMobContainer">
                <div className="levelMobContainer">

                </div>
                <div className="isCapturable MobContainer">

                </div>
            </div>
        </div>
    </div>
    )
    
}
