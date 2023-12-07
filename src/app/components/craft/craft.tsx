"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import RecipeIngredientFromRecipeQty from "@/app/types/Recipe/RecipeIngredientFromRecipeQty";
import RemoveButton from "../common/removeToCraft";

import checked from "/public/checked.png"
import "./craft.css"

export default function CraftComponent() {
    let isItemsToCraft = localStorage.getItem("itemsToCraft")
    let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];

    const qtyInputRefs: any = {};
    const [qtyValues, setQtyValues] = useState(itemsToCraft.map((item: any) => item.quantity || 1));

    // Sauvegarde à chaque changement la nouvelle quantité d'item que l'on veut faire

    const handleQtyChange = (index: number) => {
        if (qtyInputRefs[index]) {
            const newValue = parseInt(qtyInputRefs[index].value, 10);
            setQtyValues((prevValues: any) => {
                const newValues = [...prevValues];
                newValues[index] = newValue;
                return newValues;
            })
            itemsToCraft[index].quantity = newValue;
            localStorage.setItem("itemsToCraft", JSON.stringify(itemsToCraft));
        }
    };

    const qtyIngredientInputRefs: any = {};
    const [qtyIngredientValues, setQtyIngredientValues] = useState<number[][]>(
        itemsToCraft.map((item: any) => 
            item.recipes[0].recipeIngredients.map((recipeIngredient: RecipeIngredientFromRecipeQty) => recipeIngredient.quantityToCraft ? recipeIngredient.quantityToCraft : 0)
        )
    );

    // Sauvegarde à chaque changement la nouvelle quantité de chaque ingrédient qu'on possède sur la recette que l'on veut faire
    
    const handleQtyIngredients = (indexItem: number, indexIngredient: number) => {

        const newValue = parseInt(qtyIngredientInputRefs[indexItem]?.[indexIngredient]?.value, 10);
    
        if (!isNaN(newValue)) {

            setQtyIngredientValues((prevValues: any) => {
                const newValues = [...prevValues];
                newValues[indexItem] = [...newValues[indexItem]];
                newValues[indexItem][indexIngredient] = newValue;
                return newValues;
            });

            const updatedItemsToCraft = [...itemsToCraft];
            const selectedRecipe = updatedItemsToCraft[indexItem].recipes[0];
            const selectedIngredient = selectedRecipe.recipeIngredients[indexIngredient];

            selectedIngredient.quantityToCraft = newValue;

            localStorage.setItem("itemsToCraft", JSON.stringify(updatedItemsToCraft));
        }
    }

    console.log(itemsToCraft);
    return (
        <div className="tabs">
            {itemsToCraft.length > 0 ? itemsToCraft.map((item :StuffSingle | ResourceSingle, i : number) => (
            <div key={i} className="craft">
                <div className="item">
                    <div className="itemImgNameLevel">
                        <div className="itemImgName">
                            <Image width={80} height={80} src={item.imageUrl} alt="" />
                            <p className="itemName">{item.name}</p>
                        </div>
                        <p className="itemLevel">Niv. {item.level}</p>
                    </div>
                    <div className="inputWrapper">
                        <RemoveButton item={item} recipeId={item.recipes[0]["@id"]}/>
                        <p className="inputText">Quantité</p>
                        <input 
                            ref={(input) => (qtyInputRefs[i] = input)}
                            value={qtyValues[i]}
                            onChange={() => handleQtyChange(i)} 
                            className="inputQty" 
                            type="number" 
                            min={1} 
                            max={20}
                        />
                    </div>
                </div>
                <div className="resources">
                    {item.recipes[0].recipeIngredients.map((recipeIngredient, j : number) => (
                        recipeIngredient.resource?.name &&
                        <div key={j} className="ingredient">
                            <Link className="ingredientImg" href={recipeIngredient.resource["@id"].slice(4)}>
                                <Image width={70} height={70} src={recipeIngredient.resource?.imageUrl} alt=""/>
                            </Link>
                            <div className="ingredientName">
                                {recipeIngredient.resource?.name}
                            </div>
                            <div className="ingredientQtyCheck">
                                <input 
                                     ref={(input) => (qtyIngredientInputRefs[i] = qtyIngredientInputRefs[i] || {})[j] = input}
                                     defaultValue={0}
                                     value={qtyIngredientValues[i][j]}
                                     onChange={() => handleQtyIngredients(i, j)}
                                     className="inputQty"
                                     type="number"
                                     min={0}
                                     max={recipeIngredient.quantity* qtyValues[i]}
                                     style={{
                                        backgroundColor: '#242424',
                                        color: '#34D6D3',
                                    }}
                                />
                                <div style={{width: "15px"}} className={`inputQtyGoal ${qtyIngredientValues[i][j] === recipeIngredient.quantity * qtyValues[i] ? 'green' : ''}`}>
                                    {recipeIngredient.quantity * qtyValues[i]}
                                    {qtyIngredientValues[i][j] === recipeIngredient.quantity * qtyValues[i] && (
                                        <Image className="imgCheckedIngredientQty" src={checked} alt="Validation ingredient quantity logo"/>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )) : 
            <div className="emptyCraft">Les Equipements ou Ressources &quot;Fabriquables&quot; que vous choisirez grâce au marteau bleu à coté des recettes, se trouveront ici !</div>
            }
        </div>
    )
}