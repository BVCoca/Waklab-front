"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import "./craft.css"
import Image from "next/image";
import RemoveButton from "../common/removeToCraft";

export default function CraftComponent() {
    let isItemsToCraft = localStorage.getItem("itemsToCraft")
    let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];

    console.log(itemsToCraft);
    return (
        <div>
            {itemsToCraft ? itemsToCraft.map((item :StuffSingle | ResourceSingle, i : number) => (
            <div key={i} className="craft">
                <div className="item">
                    <div  className="itemImgName">
                        <Image width={80} height={80} src={item.imageUrl} alt="" />
                        <p className="name">{item.name}</p>
                    </div>
                    <div className="itemLevel">
                        <p className="level">Niv. {item.level}</p>
                    </div>
                </div>
                <div className="resources">
                    <div className="ingredientTab">
                            <div className="ingredientImgTab">
                                Image
                            </div>
                            <div className="ingredientNameTab">
                                Nom
                            </div>
                            <div className="ingredientQtyTab">
                                Qté
                            </div>
                        </div>
                    {item.recipes[0].recipeIngredients.map((recipeIngredient, i : number) => (
                        <div  key={i} className="ingredient">
                            <div className="ingredientImg">
                                <Image width={70} height={70} src={recipeIngredient.resource?.imageUrl} alt=""/>
                            </div>
                            <div className="ingredientName">
                                {recipeIngredient.resource?.name}
                            </div>
                            <div className="ingredientQty">
                                {recipeIngredient.quantity}
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