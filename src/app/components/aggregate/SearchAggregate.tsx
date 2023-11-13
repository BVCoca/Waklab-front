import { Aggregate } from "@/app/types/Search";
import MultiRangeSlider from "./MultiRangeSlider";
import "./SearchAggregate.css"
import { useState } from "react";
import { RarityAggregate } from "@/app/types/Rarity";
import SelectMultiple from "./SelectMultiple";
import { TypeResourceAggregate } from "@/app/types/Resource/TypeResource";
import { TypeStuffAggregate } from "@/app/types/Stuff/TypeStuff";
import { FamilyAggregate } from "@/app/types/Mob/Family";

interface Props {
    aggregate : Aggregate,
    onUpdate : (filters : any) => void
}

export default function SearchAggregate({aggregate, onUpdate} : Props) {

    const [levelMin, setLevelMin] = useState<number|undefined>(aggregate.minLevel.value)
    const [levelMax, setLevelMax] = useState<number|undefined>(aggregate.maxLevel.value)

    const [rarities, setRarities] = useState<RarityAggregate[]>([])
    const [types, setTypes] = useState<TypeResourceAggregate[] | TypeStuffAggregate[]>([])
    const [families, setFamilies] = useState<FamilyAggregate[]>([])

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

    const handleFamilyChange = (selected : Array<any>) => {
        setFamilies(selected)
    }

    const handleValidate = () => {
        onUpdate({
            rarity : rarities,
            type : types,
            family : families,
            minLevel : {
                value : levelMin
            },
            maxLevel : {
                value : levelMax
            }
        })
    }

    const handleReset = () => {
        setLevelMin(undefined)
        setLevelMax(undefined)
        setTypes([])
        setRarities([])
        setFamilies([])
        
        onUpdate({
            rarity : [],
            type : [],
            family : [],
            minLevel : {
                value : null
            },
            maxLevel : {
                value : null
            }
        })
    }

    return (
        <div className="aggregateContainer">
            <div className="aggregateHeader">
                <h2>Filtre</h2>
                <button className="aggregateValidate" onClick={handleReset}>Réintialiser les filtres</button>
            </div>
            <div className="aggregateScrollable">
                {aggregate.minLevel && aggregate.maxLevel && (
                    <div className="levelFilter">
                        <h3>Niveau</h3>
                        <MultiRangeSlider min={aggregate.minLevel.value} max={aggregate.maxLevel.value} onChange={handleLevelChange}/>
                    </div>
                )}
                {aggregate.rarity.length > 0 && (
                    <div className="levelFilter">
                        <h3>Rareté</h3>
                        <SelectMultiple choices={aggregate.rarity} onChange={handleRarityChange} selected={rarities}/>
                    </div>
                )}
                {aggregate.type.length > 0 && (
                    <div className="levelFilter">
                        <h3>Type</h3>
                        <SelectMultiple choices={aggregate.type} onChange={handleTypeChange} selected={types}/>
                    </div>
                )}
                {aggregate.family.length > 0 && (
                    <div className="levelFilter">
                        <h3>Familles</h3>
                        <SelectMultiple choices={aggregate.family} onChange={handleFamilyChange} selected={families}/>
                    </div>
                )}
            </div>
            <button onClick={handleValidate} className="aggregateValidate">Valider</button>
        </div>
    )
}