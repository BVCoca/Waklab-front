import { FamilyAggregate } from "@/app/types/Mob/Family";
import { RarityAggregate } from "@/app/types/Rarity";
import { TypeResourceAggregate } from "@/app/types/Resource/TypeResource";
import { TypeStuffAggregate } from "@/app/types/Stuff/TypeStuff";
import { useState, useEffect } from "react";
import "./SelectMultiple.css"
import RarityView from "../common/RarityView";
import { isFamily, isRarity, isType } from "@/app/types/isType";
import TypeView from "../common/TypeView";
import FamilyView from "../common/FamilyView";

interface Props {
    choices : TypeResourceAggregate[] | TypeStuffAggregate[] | RarityAggregate[] | FamilyAggregate[],
    selected? : TypeResourceAggregate[] | TypeStuffAggregate[] | RarityAggregate[] | FamilyAggregate[],
    onChange : (selected : TypeResourceAggregate[] | TypeStuffAggregate[] | RarityAggregate[] | FamilyAggregate[]) => void
}

export default function SelectMultiple({choices, onChange, selected = []} : Props) {

    const [selectedState, setSelected] = useState<TypeResourceAggregate[] | TypeStuffAggregate[] | RarityAggregate[] | FamilyAggregate[]>(selected)

    const handleCheck = (value : any, checked : boolean) => {
        if(checked) {
            setSelected([...selectedState, value])
        } else {
            setSelected((selecteds : any) => selecteds.filter((s : RarityAggregate | FamilyAggregate | TypeResourceAggregate | TypeStuffAggregate) => s !== value))
        }
    }

    useEffect(() => {
        setSelected(selected)
    }, [selected])

    useEffect(() => {
        onChange(selectedState)
    }, [selectedState])

    return (
        <div className="multipleContainer">
            {choices.map((choice : RarityAggregate | FamilyAggregate | TypeResourceAggregate | TypeStuffAggregate, key) => (
                <div key={key} className="multipleChoice" onClick={() => handleCheck(choice, !selectedState.find(s => s.value === choice.value))}>
                    <input style={{marginLeft : "10px"}} type="checkbox" value={choice.value} checked={selectedState.find(s => s.value === choice.value) !== undefined} readOnly/>
                    <span>
                        {isRarity(choice) && <RarityView rarity={choice} isSmall={true} />}
                        {isType(choice) && <TypeView type={choice} />}
                        {isFamily(choice) && <FamilyView family={choice} />}
                    </span>
                    <span style={{width : "100%", textAlign : "right", paddingRight : "10px"}}>
                        ( {choice.count} )
                    </span>
                </div>
            ))}
        </div>
    )
}