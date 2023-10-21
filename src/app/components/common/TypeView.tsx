import Image from "next/image";
import "./common.css"
import TypeStuff from "@/app/types/Stuff/TypeStuff";

interface Props {
    type : TypeStuff
}

export default function TypeView({type} : Props) {
    return (
        <div className="typeContainer">
            <Image src={type.icon} width={30} height={30} alt="Types d\'équipements"/>
            <h4 className="typeLabel">{type.name}</h4>
        </div>
    )
}