import CardMobs from "../components/cardHome/cardMobs/cardMobs";
import Header from "../components/header/header";
import datas from "@/app/datas/datas.json"
import "../components/home/home.css"

export default function Page() {
  
  return (
    <div id="content">
      <Header />
      <div id="cardList">
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
        />
        ))}
        </div>
    </div>
  )
}
