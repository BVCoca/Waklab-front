import "@/app/styles/globals.css"
import "./home.css"
import datas from "@/app/datas/datas.json"
import CardMobs from "../card/cardMobs/cardMobs"

export default function Home() {

    return (
        <div id="cardList" className="card-list">
            {datas && datas.map((data, index) => (
                <CardMobs
                    key={index}
                    levelMin={data.levelMin}
                    levelMax={data.levelMax}
                    image={data.imageUrl}
                    name={data.name}
                    typeName={data.famille}
                    typeImage={data.typeImage}
                    slug={data.slug}
                    rarityImage={data.rarityImage}
                    rarityName={data.rarityName}
                />
            ))}
        </div> 
    )
}