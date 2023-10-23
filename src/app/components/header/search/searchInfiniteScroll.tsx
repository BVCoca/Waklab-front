import Mob from "@/app/types/Mob/Mob"
import Resource from "@/app/types/Resource/Resource"
import Stuff from "@/app/types/Stuff/Stuff"
import Card from "../../card/Card"

interface Props {
    resultsScroll : Array<Mob|Stuff|Resource>
}

export default function SearchInfiniteScroll({resultsScroll} : Props) {

    return (
        <div id="cardList">
            {resultsScroll && resultsScroll.map((result, index ) => (
                <Card
                    key={index}
                    item={result}
                />
            ))}
        </div>
    )
}