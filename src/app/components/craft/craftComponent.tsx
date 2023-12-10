"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import RemoveButton from "../common/removeToCraft";
import checked from "/public/checked.png"
import "./craftComponent.css"
import RecipeIngredientFromRecipe from "@/app/types/Recipe/RecipeIngredientFromRecipe";

export default function CraftComponent() {
    
    const [itemsToCraft, setItemsToCraft] = useState<Array<StuffSingle | ResourceSingle>>([]);

    useEffect(() => {
        let isItemsToCraft = localStorage.getItem("itemsToCraft")
        let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];
        setItemsToCraft(itemsToCraft)
    }, [])

    useEffect(() => {
        if(itemsToCraft.length > 0)
            localStorage.setItem("itemsToCraft", JSON.stringify(itemsToCraft))
    }, [itemsToCraft])

    // Sauvegarde à chaque changement la nouvelle quantité d'item que l'on veut faire
    const handleQtyChange = (e : any, item: StuffSingle | ResourceSingle) => {
        setItemsToCraft(itemsToCraft.map((itemToCraft : StuffSingle | ResourceSingle) => {

            if(itemToCraft["@id"] === item["@id"] && itemToCraft.recipes[0]["@id"] === item.recipes[0]["@id"]) {
                itemToCraft.quantityToCraft = e.target.value
            }

            return itemToCraft;
        }))
    };

    // Sauvegarde à chaque changement de ressource
    const handleQtyIngredients = (e : any, item : StuffSingle | ResourceSingle, ingredient : RecipeIngredientFromRecipe) => {
        setItemsToCraft(itemsToCraft.map((itemToCraft : StuffSingle | ResourceSingle) => {
            
            if(itemToCraft["@id"] === item["@id"] && itemToCraft.recipes[0]["@id"] === item.recipes[0]["@id"]) {
                itemToCraft.recipes[0].recipeIngredients.map((recipeIngredient : RecipeIngredientFromRecipe) => {
                    if(recipeIngredient["@id"] === ingredient["@id"]) {
                        recipeIngredient.quantityStocked = e.target.value
                    }
                })
            }
            
            return itemToCraft
        }))
    }

    return (
        <div className="tabs">
            {itemsToCraft.length > 0 ? itemsToCraft.map((item :StuffSingle | ResourceSingle, i : number) => (
            <div key={i} className="craft">
                <div className="item">
                    <div className="itemImgNameLevel">
                        <div className="itemImgName">
                            <Link className="ingredientImg" href={item["@id"].slice(4)} target="_blank">
                                <Image width={80} height={80} src={item.imageUrl} alt=""/>
                            </Link>
                            <p className="itemName">{item.name}</p>
                        </div>
                        <p className="itemLevel">Niv. {item.level}</p>
                    </div>
                    <div className="inputWrapper">
                        <RemoveButton item={item} recipeId={item.recipes[0]["@id"]}/>
                        <p className="inputText">Quantité</p>
                        <input 
                            value={item.quantityToCraft}
                            onChange={(e) => handleQtyChange(e, item)} 
                            className="inputQty" 
                            type="number" 
                            min={1} 
                            max={20}
                            style={{
                                backgroundColor: '#333333',
                                color: '#34D6D3',
                                border: "none",
                                borderRadius: "3px"
                            }}
                        />
                    </div>
                </div>
                <div className="resources">
                    {item.recipes[0].recipeIngredients.map((recipeIngredient : RecipeIngredientFromRecipe, j : number) => 
                        <div key={j} className="ingredient">
                            {recipeIngredient.resource && (
                                <Link className="ingredientImg" href={recipeIngredient.resource["@id"].slice(4)} target="_blank">
                                    <Image width={70} height={70} src={recipeIngredient.resource.imageUrl} alt=""/>
                                    <div className="ingredientName">
                                        {recipeIngredient.resource.name}
                                    </div>
                                </Link>
                            )}
                            {recipeIngredient.stuff && (
                                <Link className="ingredientImg" href={recipeIngredient.stuff["@id"].slice(4)} target="_blank">
                                    <Image width={70} height={70} src={recipeIngredient.stuff.imageUrl} alt=""/>
                                    <div className="ingredientName">
                                        {recipeIngredient.stuff.name}
                                    </div>
                                </Link>
                            )}
                            <div className="ingredientQtyCheck">
                                <input 
                                    value={recipeIngredient.quantityStocked ?? 0}
                                    onChange={(e) => handleQtyIngredients(e, item, recipeIngredient)}
                                    className="inputQty"
                                    type="number"
                                    min={0}
                                    max={recipeIngredient.quantity * item.quantityToCraft}
                                    style={{
                                        backgroundColor: '#242424',
                                        color: '#34D6D3',
                                        border: "none",
                                        borderRadius: "3px"
                                    }}
                                />
                                <div style={{display: "flex", width: "15px"}} className={`inputQtyGoal ${recipeIngredient.quantityStocked >= recipeIngredient.quantity * item.quantityToCraft ? 'green' : ''}`}>
                                    {recipeIngredient.quantity * item.quantityToCraft}
                                    {recipeIngredient.quantityStocked >= recipeIngredient.quantity * item.quantityToCraft && (
                                        <Image className="imgCheckedIngredientQty" src={checked} alt="Validation ingredient quantity logo"/>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            )) : 
                <div className="emptyCraft">Les Equipements ou Ressources &quot;Fabriquables&quot; que vous choisirez grâce au marteau bleu à coté des recettes, se trouveront ici !</div>
            }
        </div>
    )
}