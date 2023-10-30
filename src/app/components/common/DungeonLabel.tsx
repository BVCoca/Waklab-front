import "./common.css"
import LogoDungeons from "@/app/icons/homepageIcon/logoDungeon.svg";

interface Props {
    isLong? : boolean
}

export default function DungeonLabel({ isLong = false} : Props) {
    return (
        <div className={`dungeonContainer ${isLong && "long"}`}>
            <LogoDungeons width={30} height={30}/>
            <h4 className="dungeonLabel">Donjon</h4>
        </div>
    )
}