import Image from "next/image";
import "./common.css"
import TypeStuff from "@/app/types/Stuff/TypeStuff";
import TypeResource, { TypeResourceAggregate } from "@/app/types/Resource/TypeResource";
import Zone from "@/app/types/Zone/Zone";
import { isType, isZone } from "@/app/types/isType";

interface Props {
    type : TypeStuff|TypeResource|Zone,
    isLong? : boolean
}

export default function TypeView({type, isLong = false} : Props) {
    return (
        <div className={`typeContainer ${isLong && "long"}`}>
            {isType(type) && <Image src={type.icon} width={30} height={30} alt="Types d\'équipements"/>}
            <h4 className="typeLabel">{type.name}</h4>
        </div>
    )
}