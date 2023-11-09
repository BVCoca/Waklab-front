import { FamilyAggregate } from "@/app/types/Mob/Family";
import { RarityAggregate } from "@/app/types/Rarity";
import { TypeResourceAggregate } from "@/app/types/Resource/TypeResource";
import { TypeStuffAggregate } from "@/app/types/Stuff/TypeStuff";
import { useState, useEffect } from "react";
import "./SelectMultiple.css"
import RarityView from "../common/RarityView";
import { isRarity, isType } from "@/app/types/isType";
import TypeView from "../common/TypeView";

interface Props {
    choices : TypeResourceAggregate[] | TypeStuffAggregate[] | RarityAggregate[] | FamilyAggregate[],
    onChange : (selected : TypeResourceAggregate[] | TypeStuffAggregate[] | RarityAggregate[] | FamilyAggregate[]) => void
}

export default function SelectMultiple({choices, onChange} : Props) {

    const [selected, setSelected] = useState<any>([])

    const handleCheck = (key : any, checked : boolean) => {
        if(checked) {
            setSelected([...selected, +key])
        } else {
            setSelected((selected : any) => selected.filter((s : any) => s !== +key))
        }
    }

    useEffect(() => {
        console.log(selected)
    }, [selected])

    return (
        <div className="multipleContainer">
            {choices.map((choice : RarityAggregate | FamilyAggregate | TypeResourceAggregate | TypeStuffAggregate, key) => (
                <div key={key} className="multipleChoice" onClick={() => handleCheck(key, !selected.includes(key))}>
                    <input style={{marginLeft : "10px"}} type="checkbox" value={key} checked={selected.includes(key)}/>
                    <span>
                        {isRarity(choice) && <RarityView rarity={choice} isSmall={true} />}
                        {isType(choice) && <TypeView type={choice} />}
                    </span>
                    <span style={{width : "100%", textAlign : "right", paddingRight : "10px"}}>
                        ( {choice.count} )
                    </span>
                </div>
            ))}
        </div>
    )
}