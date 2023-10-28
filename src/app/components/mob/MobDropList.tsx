import MobDrop from "@/app/types/Mob/MobDrop";
import LongCard from "../card/LongCard";
import "./Mob.css"

interface Props {
    drops : MobDrop[]
}

export default function MobDropList({drops} : Props) {

    if(drops.length === 0) {
        return
    }

    return(
        <div className="dropMobContainer">
            <h2 className="titleDropMob">{`Peut s'obtenir sur`}</h2>
            <div className="cardDropContainer">
                {drops.map((drop,index) => <LongCard key={`dropMob-${index}`} item={drop.mob} value={drop.value + " %"} />)}
            </div>
        </div>
    )
}