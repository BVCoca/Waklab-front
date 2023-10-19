import "@/app/styles/globals.css"
import "./cardMobs.css"
import Image from "next/image";
import Link from "next/link";

interface CardMobsProps {
  levelMin: number;
  levelMax: number;
  image: string;
  name: string;
  typeName: string;
  typeImage: string;
  slug: string;
  rarityImage: string;
  rarityName: string;
}


const CardMobs: React.FC<CardMobsProps> = ({ levelMin, levelMax, image, name, typeName, typeImage, rarityImage, rarityName, slug }) => {

  return (
    <div id="cardContainer">
      <Link href={`/mobs/${slug}`}>
      <div id="rarityAndLevel">
        <div id="rarity">
          <Image id="rarityImage" src={rarityImage} alt="Rarity Image" width={27} height={27}/>
          <div id="rarityName">{rarityName}</div>
        </div>
        <div id="level">
            Niv. {levelMin} - {levelMax}
        </div>
      </div>
        <Image id="cardImage" src={image} alt="Image du mob" width={180} height={180}/>
      <div id="nameAndType">
          <div id="name">
            {name}
          </div>
          <div id="type">
            <Image id="typeImage" src={typeImage} alt="Type Image" width={27} height={27}/>
            <div id="typeName">{typeName}</div>
          </div>
        
      </div>
      </Link>
    </div> 
  )
}

export default CardMobs;
