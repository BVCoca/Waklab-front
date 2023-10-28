import "./common.css"
import LogoDungeons from "@/app/icons/homepageIcon/logoDungeon.svg";

interface Props {
    isLong? : boolean
}

export default function DongeonLabel({ isLong = false} : Props) {
    return (
        <div className={`dongeonContainer ${isLong && "long"}`}>
            <LogoDungeons width={30} height={30}/>
            <h4 className="dongeonLabel">Donjon</h4>
        </div>
    )
}