import { Aggregate } from "@/app/types/Search";
import MultiRangeSlider from "./MultiRangeSlider";
import "./SearchAggregate.css"
import { useState } from "react";
import Rarity, { RarityAggregate } from "@/app/types/Rarity";
import SelectMultiple from "./SelectMultiple";
import { TypeResourceAggregate } from "@/app/types/Resource/TypeResource";
import { TypeStuffAggregate } from "@/app/types/Stuff/TypeStuff";

interface Props {
    aggregate : Aggregate
}

export default function SearchAggregate({aggregate} : Props) {

    const [levelMin, setLevelMin] = useState<number>(aggregate.minLevel.value)
    const [levelMax, setLevelMax] = useState<number>(aggregate.maxLevel.value)

    const [rarities, setRarities] = useState<RarityAggregate[]>(aggregate.rarity)
    const [types, setTypes] = useState<TypeResourceAggregate[] | TypeStuffAggregate[]>(aggregate.type)

    const handleLevelChange = (({min, max} : any) => {
        setLevelMin(min)
        setLevelMax(max)
    })

    const handleRarityChange = (selected : Array<any>) => {
        setRarities(selected)
    }

    const handleTypeChange = (selected : Array<any>) => {
        setTypes(selected)
    }

    const handleValidate = () => {

    }

    return (
        <div className="aggregateContainer">
            <h2>Filtre</h2>
            <div className="aggregateScrollable">
                {/* {aggregate.minLevel && aggregate.maxLevel && (
                    <div className="levelFilter">
                        <h3>Niveau</h3>
                        <MultiRangeSlider min={aggregate.minLevel.value} max={aggregate.maxLevel.value} onChange={handleLevelChange}/>
                    </div>
                )} */}
                {aggregate.rarity.length > 0 && (
                    <div className="levelFilter">
                        <h3>Rareté</h3>
                        <SelectMultiple choices={aggregate.rarity} onChange={handleRarityChange}/>
                    </div>
                )}
                {aggregate.type.length > 0 && (
                    <div className="levelFilter">
                        <h3>Type</h3>
                        <SelectMultiple choices={aggregate.type} onChange={handleTypeChange}/>
                    </div>
                )}
            </div>
            <button onClick={handleValidate} className="aggregateValidate">Valider</button>
        </div>
    )
}