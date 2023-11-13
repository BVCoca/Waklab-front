"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import Hammer from "/public/hammer.svg"
import ResourceSingle from "@/app/types/Resource/ResourceSingle";

interface Props {
  item: StuffSingle | ResourceSingle
  recipeId : string
}

export default function CraftingButton({ item, recipeId }: Props) {

  console.log('recipeId', recipeId)

    const saved = () => {
      let isItemsToCraft = localStorage.getItem("itemsToCraft");
      let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];

      item.recipes = item.recipes.filter((recipe) => recipe["@id"] === recipeId) 
      itemsToCraft.push(item);
  
      localStorage.setItem("itemsToCraft", JSON.stringify(itemsToCraft))
  
      console.log(itemsToCraft);
    };
  
    return (
      <button
        className="craftButton"
        style={{ background: "none", border: "none" }}
        onClick={saved}
      >
        <Hammer fill="#1B8684" width={40} height={40} />
      </button>
    );
  }