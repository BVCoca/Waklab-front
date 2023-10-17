import "../../styles/globals.css"

interface CardMobsProps {
  levelMin: number;
  levelMax: number;
  image: string;
  name: string;
  typeName: string;
}

const CardMobs: React.FC<CardMobsProps> = ({ levelMin, levelMax, image, name, typeName }) => {
  return (
    <div id="cardContainer">
      <div id="rarity" />
      <div id="level">
        <div id="level">
          Niv {levelMin} - {levelMax}
          <div id="cardImage">
            {image}
            <div id="name">
              {name}
              <div id="typeImage" />
              <div id="typeName">{typeName}</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default CardMobs;
