import Image from "next/image";
import "./common.css"
import TypeStuff from "@/app/types/Stuff/TypeStuff";

interface Props {
    type : TypeStuff,
    isLong? : boolean
}

export default function TypeView({type, isLong = false} : Props) {
    return (
        <div className={`typeContainer ${isLong && "long"}`}>
            <Image src={type.icon} width={30} height={30} alt="Types d\'équipements"/>
            <h4 className="typeLabel">{type.name}</h4>
        </div>
    )
}