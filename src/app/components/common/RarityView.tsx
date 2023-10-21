import Rarity from "@/app/types/Rarity";
import Image from "next/image";
import "./common.css"

interface Props {
    rarity : Rarity
}

export default function RarityView({rarity} : Props) {

    let color;

    // On change la couleur en fonction de la valeur de la rarét
    switch(rarity.value) {
        case 0:
            color = "#959595";
            break;
        case 1:
            color = "#CCCCCC";
            break;
        case 2:
            color = "#00C768";
            break;
        case 3:
            color = "#FF7600";
            break;
        case 4:
            color = "#FFCF11";
            break;
        case 5:
            color = "#FF5FFA";
            break;
        case 6:
            color = "#6DC2DC";
            break;
        case 7:
            color = "#F170A5";
            break;
        default :
            color = "#007D7F";
    }

    return (
        <div className="rarityContainer">
            <Image alt="Rareté" src={rarity.icon} />
            <h4 className="rarityLabel" style={{color : color}}>{rarity.name}</h4>
        </div>
    )
}