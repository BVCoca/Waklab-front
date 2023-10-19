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

    if (!mob) {
        return <p>Monstre non trouvé</p>;
    }

    return (
    <div className="detailsContent">
        <HeaderDetails />
        <div className="mobStatsContainer">
            <div className="imageMobContainer">
                <Image width={150} height={150} src={mob.imageUrl} alt={`Image du monstre ${mob.name}`}/>
                <h3>{mob.name}</h3>
                <p className="family">Famille : {mob.family.name}</p>
            </div>

            <div className="primaryStatsMobContainer">
                <div className="healthMobContainer">
                    <div className="valueContainer">
                        <Image src="/mobDetailsIcon/healthHearth.svg" alt="Image de la santé du monstre" width={100} height={93}/>
                        <span id="valueHealth">{mob.hp}</span>
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
