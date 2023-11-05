import { Aggregate } from "@/app/types/Search";
import MultiRangeSlider from "./MultiRangeSlider";
import "./SearchAggregate.css"
import { useState } from "react";

interface Props {
    aggregate : Aggregate
}

export default function SearchAggregate({aggregate} : Props) {

    const [levelMin, setLevelMin] = useState<number>(aggregate.minLevel.value)
    const [levelMax, setLevelMax] = useState<number>(aggregate.maxLevel.value)

    const handleLevelChange = (({min, max} : any) => {
        setLevelMin(min)
        setLevelMax(max)
    })

    const handleValidate = () => {

    }

    return (
        <div className="aggregateContainer">
            <h2>Filtre</h2>
            {aggregate.minLevel && aggregate.maxLevel && (
                <div className="levelFilter">
                    <h3>Niveau</h3>
                    <MultiRangeSlider min={aggregate.minLevel.value} max={aggregate.maxLevel.value} onChange={handleLevelChange}/>
                </div>
            )}
            <button onClick={handleValidate} className="aggregateValidate">Valider</button>
        </div>
    )
}