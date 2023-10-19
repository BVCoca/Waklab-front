import Image from "next/image";
import datas from "@/app/datas/datas.json";
import { getMob } from "@/app/services/mob";
import { GetServerSidePropsContext } from "next";
import MobSingle from "@/app/types/Mob/MobSingle";

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
        <div className="mobStatsContainer">
        <div className="imageMobContainer">
            <Image width={150} height={150} src={mob.imageUrl} alt="Image du monstre"/>
            <h3>{mob.name}</h3>
            <p>Famille: {mob.family.name}</p>
        </div>

        <div className="primaryStatsMobContainer">
            <div className="HealthMobContainer">

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
        )
    
}
