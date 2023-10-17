import "../../styles/globals.css"
import datas from "../../datas/datas.json"
import CardMobs from "./cardMobs/cardMobs"

export default function Home() {
    return (
        <>
            {datas && datas.map((data, index) => {
                <CardMobs
                    key={index}
                    levelMin={data.levelMin}
                    levelMax={data.levelMax}
                    image={data.imageUrl}
                    name={data.name}
                    typeName={data.famille}
                />
            })}
        </> 
    )
}