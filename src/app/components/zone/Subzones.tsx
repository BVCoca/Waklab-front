import Subzone from "@/app/types/Zone/Subzone";
import "@/app/styles/globals.css";
import Card from "../card/Card";

interface Props {
    subzones : Subzone[]
}

export default function Subzones({subzones = []} : Props) {
    return subzones.length > 0 && (
        <div className="dropMobContainer">
            <h2 className="titleDropMob">{subzones.length > 1 ? 'Disponibles dans les zones' : 'Disponible dans la zone'}</h2>
            <div className="cardDropContainer">
                { subzones.map((subzone : Subzone) => (
                    <Card key={`subzone-${subzone.slug}`} item={subzone} />
                ))}
            </div>
        </div>
    )   
}