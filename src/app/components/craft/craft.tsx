"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import "./craft.css"
import Image from "next/image";
import RemoveButton from "../common/removeToCraft";
import { useState } from "react";

export default function CraftComponent() {
    let isItemsToCraft = localStorage.getItem("itemsToCraft")
    let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];

    const [colorQty, setColorQty] = useState(itemsToCraft.map(() => "white"));

    const qtyInputRefs = {};
    const [qtyValues, setQtyValues] = useState(itemsToCraft.map(() => 1));

    const handleQtyChange = (index: number) => {
        if (qtyInputRefs[index]) {
            const newValue = parseInt(qtyInputRefs[index].value, 10);
            setQtyValues((prevValues) => {
                const newValues = [...prevValues];
                newValues[index] = newValue;
                return newValues;
            });
        }
    };

    const handleInputChange = (quantity, index) => (event) => {
        const inputValue = parseInt(event.target.value, 10);
        
        const maxValue = quantity * qtyValues[index];
        if (inputValue >= maxValue) {
            setColorQty((prevValues) => {
                const newValues = [...prevValues];
                newValues[index] = "#1B8684";
                return newValues;
            });
        } else {
            setColorQty((prevValues) => {
                const newValues = [...prevValues];
                newValues[index] = "white";
                return newValues;
            });
        }
    };

    console.log(itemsToCraft);
    return (
        <div className="tabs">
            {itemsToCraft ? itemsToCraft.map((item :StuffSingle | ResourceSingle, i : number) => (
            <div key={i} className="craft">
                <div className="item">
                    <div  className="itemImgNameLevel">
                        <div className="itemImgName">
                            <Image width={80} height={80} src={item.imageUrl} alt="" />
                            <p className="name">{item.name}</p>
                        </div>
                        <p className="level">Niv. {item.level}</p>
                    </div>
                    <div className="inputWrapper">
                        <RemoveButton item={item} recipeId={item.recipes[0]["@id"]}/>
                        <p className="inputText">Quantité</p>
                        <input ref={(input) => (qtyInputRefs[i] = input)}
                                value={qtyValues[i]}
                                onChange={() => handleQtyChange(i)} className="inputQty" type="number" min={1} max={20}/>
                    </div>
                </div>
                <div className="resources">
                    {item.recipes[0].recipeIngredients.map((recipeIngredient, j : number) => (
                        recipeIngredient.resource?.name &&
                        <div key={j} className="ingredient">
                            <div className="ingredientImg">
                                <Image width={70} height={70} src={recipeIngredient.resource?.imageUrl} alt=""/>
                            </div>
                            <div className="ingredientName">
                                {recipeIngredient.resource?.name}
                            </div>
                            <div className="ingredientQtyCheck">
                                <input onChange={handleInputChange(recipeIngredient.quantity, i)} className="inputQty" type="number" min={1} max={recipeIngredient.quantity * qtyValues[i]}/>
                                    <div style={{ color: colorQty[i] }} className="ingredientQty">
                                        {recipeIngredient.quantity * qtyValues[i]}
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )) : 
            <div>Les Equipements ou Ressources &quot;Fabriquables&quot; que vous choisirez grâce au marteau bleu à coté des recettes se trouveront ici !</div>
            }
        </div>
    )
}