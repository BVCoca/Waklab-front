import "@/app/styles/globals.css"
import "./cardMobs.css"
import Image from "next/image";

interface CardMobsProps {
  levelMin: number;
  levelMax: number;
  image: string;
  name: string;
  typeName: string;
  typeImage: string;
}

const CardMobs: React.FC<CardMobsProps> = ({ levelMin, levelMax, image, name, typeName, typeImage }) => {

  return (
    <div id="cardContainer">
      <div id="rarity" />
      <div id="level">
          Niv. {levelMin} - {levelMax}
      </div>
        <Image id="cardImage" src={image} alt="Image du mob" width={180} height={180}/>
      <div id="nameAndType">
          <div id="name">
            {name}
          <div id="type">
          </div>
            <Image id="typeImage" src={typeImage} alt="Type Image" width={27} height={27}/>
            <div id="typeName">{typeName}</div>
        </div>
      </div>
    </div> 
  )
}

export default CardMobs;
