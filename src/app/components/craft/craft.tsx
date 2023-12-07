"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import "./craft.css"
import Image from "next/image";
import RemoveButton from "../common/removeToCraft";
import { useState } from "react";
import RecipeIngredientFromRecipeQty from "@/app/types/Recipe/RecipeIngredientFromRecipeQty";
import Link from "next/link";

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
            {itemsToCraft ? itemsToCraft.map((item :StuffSingle | ResourceSingle, i : number) => (
            <div key={i} className="craft">
                <div className="item">
                    <div className="itemImgNameLevel">
                        <div className="itemImgName">
                            <Image width={80} height={80} src={item.imageUrl} alt="" />
                            <p className="name">{item.name}</p>
                        </div>
                        <p className="level">Niv. {item.level}</p>
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
                                     min={1}
                                     max={recipeIngredient.quantity* qtyValues[i]}
                                     maxLength={4}
                                />
                                <div style={{width: "15px"}} className={`inputQty ${qtyIngredientValues[i][j] === recipeIngredient.quantity * qtyValues[i] ? 'green' : ''}`}>
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