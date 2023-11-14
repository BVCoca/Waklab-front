"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import "./craft.css"
import Image from "next/image";
import RemoveButton from "../common/removeToCraft";
import { useRef, useState } from "react";

export default function CraftComponent() {
    let isItemsToCraft = localStorage.getItem("itemsToCraft")
    let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];

    const qtyInputRef = useRef<HTMLInputElement>(null);
    const [qtyValue, setQtyValue] = useState(1);

    const handleQtyChange = () => {
        if (qtyInputRef.current) {
            const newValue = parseInt(qtyInputRef.current.value, 10);
            setQtyValue(newValue);
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
                        <input ref={qtyInputRef} value={qtyValue} onChange={handleQtyChange} className="inputQty" type="number" min={1} max={20}/>
                    </div>
                </div>
                <div className="resources">
                    {item.recipes[0].recipeIngredients.map((recipeIngredient, i : number) => (
                        <div key={i} className="ingredient">
                            <div className="ingredientImg">
                                <Image width={70} height={70} src={recipeIngredient.resource?.imageUrl} alt=""/>
                            </div>
                            <div className="ingredientName">
                                {recipeIngredient.resource?.name}
                            </div>
                            <div className="ingredientQty">
                                {recipeIngredient.quantity * qtyValue}
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